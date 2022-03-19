import React, { ReactElement } from 'react';
import Layout from "../components/layout";
import InnerLayout from "../components/innerLayout";
import DocComp from "../components/docComp";
import { Files } from "phosphor-react";



const FachlischeDokumente = () => {
    return (
        <>
            <div className='mt-4'>
                <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center py-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Files size={32} />
                        <h1 className="text-2xl mt-2 font-mono">Fachlische Dokumente</h1>
                    </div>
                </div>
                <div className='my-2 flex-col flex px-6'>
                    <span>
                        <h2 className='font-bold'>Von dem Landesratsamt:</h2>
                    </span>
                    <DocComp
                        btnTitle="offnen"
                        itemName="KinderHochstadt_zimmer"
                        itemLocation="/pdfs/kindergarden.pdf"
                    />
                    <DocComp
                        btnTitle="offnen"
                        itemName="KinderHochstadt_zimmer"
                        itemLocation="/pdfs/kindergarden.pdf"
                    />
                    <DocComp
                        btnTitle="offnen"
                        itemName="KinderHochstadt_zimmer"
                        itemLocation="/pdfs/kindergarden.pdf"
                    />
                    <DocComp
                        btnTitle="offnen"
                        itemName="KinderHochstadt_zimmer"
                        itemLocation="/pdfs/kindergarden.pdf"
                    />

                </div>
                <div className='my-2 flex-col flex px-6'>
                    <span>
                        <h2 className='font-bold'>Von der Kindergartenfachaufsicht:</h2>
                    </span>
                    <DocComp
                        btnTitle="offnen"
                        itemName="KinderHochstadt_zimmer"
                        itemLocation="/pdfs/kindergarden.pdf"
                    />
                </div>

            </div>
        </>
    )
};

FachlischeDokumente.getLayout = function getLayout(fachlischeDokumente: ReactElement) {
    return <Layout><InnerLayout>{fachlischeDokumente}</InnerLayout></Layout>;
};

export default FachlischeDokumente;
