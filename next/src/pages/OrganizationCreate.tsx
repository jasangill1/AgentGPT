import Input from "../ui/input";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import clsx from "clsx";

const CreateOrganization = () => {
 
    const [companySize, setCompanySize] = useState('');
    const [userRole, setUserRole] = useState('');


    return (
        <div className="flex flex-col justify-center items-center w-full font-sans min-h-screen bg-gradient-to-br from-black via via-black to bg-purple-950">
            <div className="text-center mb-6 max-w-[400px]">
                <h1 className="leading-4  text-2xl mb-6 text-white tracking-wide">
                    Create a New Organization
                </h1>
                <label className="text-white/60 font-extralight">
                    Organization are shared enviroments where teams can work on projects, automate workflows, and collaborate on processes.
                </label>
            </div>
            <div className="w-[400px] border border-zinc-900 h-[400px] p-4 bg-black text-white rounded-xl shadow-lg flex flex-col gap-4">
                <div className="border-b p-4 my-2 border-white/10">
                    <Input
                    label="Oraganization Name"
                    name="OrganizationName"
                    placeholder=""
                    />
                    <Input
                        label="Organization URL"
                        name="OrganizationURL"
                        placeholder="Reworkd.io/your-organization"
                    />
                </div>
        

                <div className="flex flex-col">
                <label
                    className="text-color-primary flex items-center gap-2 text-sm font-bold leading-6"
                    htmlFor="companySize"
                >
                    How large is your company?
                </label>
                <select
                    id="companySize"
                    className={clsx(
                    "text-color-primary background-color-7 placeholder:text-color-tertiary focus:outline-inset border-focusVisible-1 border-style-1 block w-full rounded-md p-1 shadow-sm transition-colors sm:text-sm sm:leading-6",
                    "border p-2 mt-1"
                    )}
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="small">1-10 employees</option>
                    <option value="medium">11-50 employees</option>
                    <option value="large">50+ employees</option>
                </select>
                </div>

                <div className="flex flex-col my-2 mt-4">
                <label
                    className="text-color-primary flex items-center gap-2 text-sm font-bold leading-6"
                    htmlFor="userRole"
                >
                    What is your role?
                </label>
                <select
                    id="userRole"
                    className={clsx(
                    "text-color-primary background-color-7 placeholder:text-color-tertiary focus:outline-inset border-focusVisible-1 border-style-1 block w-full rounded-md p-1 shadow-sm transition-colors sm:text-sm sm:leading-6",
                    "border p-2 mt-1"
                    )}
                    value={userRole}
                    onChange={(e) => setUserRole(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="owner">Owner</option>
                    <option value="manager">Manager</option>
                    <option value="employee">Employee</option>
                </select>
                </div>
            </div>
            <PrimaryButton className="px-8  mt-6">Create Organization</PrimaryButton>
        </div>
    );
}

export default CreateOrganization;
