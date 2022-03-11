import React, { useState } from 'react';
import { CheckSquare } from 'phosphor-react';

const requestedDoc = ["Geburtsurkunde", "Steuerfreiheit", "Work"];



export const DocumentUpdate = () => {

    const [file, setFile] = useState(null);

    function handleFile(e) {
        // console.log(e.target.files, 'handled files');
        let file = e.target.files
        setFile(file)

    }

    function uploadFile(e) {
        let fileUpload = file
        console.log(fileUpload, "from button");

    }

    return (
        <>
            <div className="space-y-6">
                <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6  ">
                    <div className="md:grid md:grid-cols-4 md:gap-6 place-content-center h-screen">
                        <div className=" md:col-span-1 ">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Dokumente zum Hochladen</h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Hier sind Listen von Dokumenten, die Sie zur weiteren Unterstützung Ihrer Bewerbung vorlegen müssen
                            </p>

                            <div className='mt-6 border-t border-t-pink-200 p-2'>
                                <h1 className="mb-2 ">die Kontrollliste</h1>
                                {requestedDoc.map((doc, index) => (
                                    <span key={index} className='flex items-center gap-2 text-gray-600'><CheckSquare size={24} color="#ff89a9" />{doc}</span>

                                ))}
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-3 ">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Unterlagen</label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-pink-600 hover:text-pink-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                                                >
                                                    <span>Daten hochladen</span>
                                                    <input id="file-upload" onChange={(e) => handleFile(e)} name="file-upload" type="file" className="sr-only" multiple />
                                                </label>
                                                <p className="pl-1">oder ziehen und ablegen</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        type="button"
                                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                    >
                                        Beenden
                                    </button>
                                    <button
                                        onClick={(e) => uploadFile(e)}
                                        type="submit"
                                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                    >
                                        Hochladen
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>


        </>
    )
};

