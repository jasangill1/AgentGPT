import io
import urllib
import urllib.parse
from typing import Any

import aiohttp
from docx import Document

from reworkd_platform.schemas.workflow.base import Block, BlockIOBase
from reworkd_platform.services.aws.s3 import SimpleStorageService
from reworkd_platform.services.sockets import websockets
from reworkd_platform.settings import settings


class UploadDocInput(BlockIOBase):
    text: str


class UploadDocOutput(BlockIOBase):
    file_url: str


class UploadDoc(Block):
    type = "UploadDoc"
    description = "Securely upload a .docx to Amazon S3"
    input: UploadDocInput

    async def run(self, workflow_id: str, **kwargs: Any) -> UploadDocOutput:
        with io.BytesIO() as pdf_file:
            websockets.log(workflow_id, "Creating doc")
            doc = Document()
            doc.add_paragraph(self.input.text)
            doc.save(pdf_file)

            websockets.log(workflow_id, "Uploading doc to S3")
            s3_service = SimpleStorageService(settings.s3_bucket_name)
            s3_service.upload_to_bucket(
                object_name=f"docs/{workflow_id}/{self.id}.docx",
                file=pdf_file,
            )
            file_url = s3_service.create_presigned_download_url(
                object_name=f"docs/{workflow_id}/{self.id}.docx",
            )

            websockets.log(workflow_id, f"Doc successfully uploaded to S3")
            tiny_url = await get_shortened_url(file_url)
            websockets.log(workflow_id, f"Download the doc via: {tiny_url}")

            return UploadDocOutput(file_url=tiny_url)


async def get_shortened_url(url: str) -> str:
    ISGD_URL = "https://is.gd/create.php"

    # Create the full API URL with the URL parameter encoded
    api_url = ISGD_URL + "?" + urllib.parse.urlencode({"url": url, "format": "simple"})

    async with aiohttp.ClientSession() as session:
        async with session.get(api_url) as response:
            if response.status == 200:
                return await response.text()
            else:
                raise ValueError(
                    f"Failed to shorten the URL. Status: {response.status}"
                )
