import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Modal from 'react-modal';

// const url = "/pdfs/kindergarden.pdf"
export default function PdfViewer( props ) {
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
        setPageNumber(prevPageNumber => prevPageNumber + offset);
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
                <button className="bg-black text-white px-4 py-2 rounded" onClick={openModal}>{props.title}</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                <Document
                    file={props.item}
                    onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>

                <div>
                    <div className="">
                        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                    </div>

                    <div className="">
                        <button
                            type="button"
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                            className=""
                        >
                            Previous
                        </button>

                        <button
                            type="button"
                            disabled={pageNumber >= numPages}
                            onClick={nextPage}
                        >
                            Next
                        </button>
                    </div>
                </div>
                </Modal>
            </div>
        </>
    );
}