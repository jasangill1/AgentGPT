import DashboardLayout from "../layout/dashboard";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useState } from "react";
import nextI18NextConfig from "../../next-i18next.config.js";
import { languages } from "../utils/languages";

const OrganizationManagement = () => {
    return (
        <DashboardLayout> 
            <div className="flex justify-center items-center w-full h-screen bg-gray-800">
                <div className="max-w-3xl w-full justify-starts">
                    <div className="h-20 border-b-[1px] p-4 mb-6 border-white/10">
                        <h1 className="text-3xl font-semibold text-gray-300">Organization</h1>
                        <span className="font-light text-white/50 font-sm">Manage your Organization settings</span>
                    </div>
                    <div className=" border-b-[1px] border-white/10 p-4 mb-6">
                        <h2 className="text-lg text-gray-300 font-light">Logo</h2>
                        <div className="w-20 h-20 rounded-sm bg-gray-400 my-4"></div>
                        <span className="font-light text-white/50">Pick a logo for your Oraganization</span>
                    </div>
                    <div className="border-b-[1px] border-white/10 p-4 mb-6">
                        <div className="max-w-sm">
                            <h2 className="text-lg text-gray-300 font-light">General </h2>
                            <div className="mt-4">
                                <label htmlFor="organizationName" className="block text-sm font-light text-gray-300">
                                Organization Name
                                </label>
                                <input
                                type="text"
                                id="organizationName"
                                className="w-full py-2 px-3 bg-gray-900 text-white border border-white/20 rounded mt-1 focus:ring-white focus:border-white"
                                placeholder="Enter organization name"
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="organizationUrl" className="block text-sm font-light text-gray-300">
                                Organization URL
                                </label>
                                <input
                                type="text"
                                id="organizationUrl"
                                className="w-full py-2 px-3 bg-gray-900 text-white border border-white/20 rounded mt-1 focus:ring-white focus:border-white"
                                placeholder="Enter organization URL"
                                />
                            </div>
                            <button
                                className="bg-purple-400/20 text-white py-2 px-4 mt-4 rounded hover:bg-purple-400/20 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                                >
                                Update
                            </button>
                        </div>
                    </div>
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                            <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
                            <p className="mt-2 text-sm text-gray-700">
                                A list of all the users in your account including their name, title, email and role.
                            </p>
                            </div>
                            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                            <button
                                type="button"
                                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add user
                            </button>
                            </div>
                        </div>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Title
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Status
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Role
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {/* {people.map((person) => (
                                    <tr key={person.email}>
                                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                        <div className="flex items-center">
                                            <div className="h-11 w-11 flex-shrink-0">
                                            <img className="h-11 w-11 rounded-full" src={person.image} alt="" />
                                            </div>
                                            <div className="ml-4">
                                            <div className="font-medium text-gray-900">{person.name}</div>
                                            <div className="mt-1 text-gray-500">{person.email}</div>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                        <div className="text-gray-900">{person.title}</div>
                                        <div className="mt-1 text-gray-500">{person.department}</div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                            Active
                                        </span>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{person.role}</td>
                                        <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Edit<span className="sr-only">, {person.name}</span>
                                        </a>
                                        </td>
                                    </tr>
                                    ))} */}
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default OrganizationManagement;

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
    const supportedLocales = languages.map((language) => language.code);
    const chosenLocale = supportedLocales.includes(locale) ? locale : "en";
  
    return {
      props: {
        ...(await serverSideTranslations(chosenLocale, nextI18NextConfig.ns)),
      },
    };
  };