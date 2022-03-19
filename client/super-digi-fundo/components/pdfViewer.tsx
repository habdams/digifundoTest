import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Modal from "react-modal";

// const url = "/pdfs/kindergarden.pdf"
export default function PdfViewer(props) {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    // to prevent right click
    // document.addEventListener("contextmenu", (event) => {
    //     event.preventDefault();
    // });

    //When document loads successfully
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <>
            <div className="main">
                <button
                    className="bg-pink-500 text-white px-8 py-2"
                    onClick={openModal}
                >
                    {props.title}
                </button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    className="flex flex-row items-center"
                >
                    <div className="w-2/3">
                        <Document
                            file={props.item}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </div>

                    <div className='flex items-start gap-4 w-1/3'>

                        <div>
                            <div className="flex items-center p-2 mb-4 bg-gray-100 rounded">
                                <span className='text-gray-400 mx-4'>Page</span> {pageNumber || (numPages ? 1 : '--')} <span className='mx-4 text-gray-400'> of </span> {numPages || '--'}
                            </div>

                            <div className="flex flex-row items-center justify-start">
                                <button
                                    type="button"
                                    disabled={pageNumber <= 1}
                                    onClick={previousPage}
                                    className="py-2 px-6 bg-slate-100 border border-gray-500 mr-4"
                                >
                                    Previous
                                </button>

                                <button
                                    type="button"
                                    disabled={pageNumber >= numPages}
                                    onClick={nextPage}
                                    className="py-2 px-6 bg-slate-100 border border-gray-500 my-4"
                                >
                                    Next
                                </button>
                            </div>
                        </div>

                        <div>
                            <button className="py-2 px-6 bg-slate-100 border border-pink-600 text-pink-600" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
}
