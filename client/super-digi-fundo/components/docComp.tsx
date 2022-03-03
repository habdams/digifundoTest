import Image from "next/image";
import PdfViewer from "./pdfViewer";

export default function DocComp( props ) {

    const {btnTitle, itemName, itemLocation} = props;
    return (
        <>
            <div className="bg-gray-200 flex items-center p-2 rounded mb-10">
                <div className="flex flex-row w-6/12 items-center gap-2">
                    <Image src={'/FilePdf.svg'} width={40} height={40} />
                    <p className="text-lg">{itemName}</p>
                </div>

                <div className="w-3/12 flex flex-row items-center gap-2">
                    <Image src={'/ellipse-blue.svg'} width={20} height={20} />
                    <p className="text-lg">nicht geprüft</p>
                </div>

                <div className="w-3/12">
                    <PdfViewer title={btnTitle} item={itemLocation} />
                </div>

            </div>
        </>
    )
}