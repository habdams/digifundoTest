import Image from "next/image";
import { useState, useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

export default function NotificationLetter() {
    const applicantAddress = useState("Lösungsanbieter GmbH");
    const nameAdmin = useState("Maria Adminus");
    const todayDate = useState("07-03-2022");
    const emailAdmin = useState("s.adminus@reg-opf.bayern.de");
    const telephone = useState("0821 317 2619");
    const roomNumber = useState("C20");

    const container = useRef(null);

    const handleExportPdf = (event) => {
        console.log("Clicked", event);
        let element = container.current || document.body;
        savePDF(element, {
            paperSize: "auto",
            margin: 40,
            fileName: `Letter for ${new Date().getFullYear()}`,
        });
    };

    const exportPDFWithComponent = () => {
        if (pdfExportComponent.current) {
            pdfExportComponent.current.save();
        }
    };

    const pdfExportComponent = useRef(null);
    return (
        <>
            <PDFExport ref={pdfExportComponent}>
                <div ref={container}>
                    <div className="flex justify-end p-2 my-4">
                        <div className="flex flex-row w-1/3 gap-2">
                            <h3 className="text-right text-2xl">
                                Regierung der Oberpfalz
                            </h3>
                            <Image
                                src="/bavarianLogo.png"
                                width={125}
                                height={75}
                            />
                        </div>
                    </div>
                    <div className="my-4">
                        <div className="w-1/3">
                            <h5 className="text-sm">
                                Regierung der Oberpfalz - 93039 Regensburg
                            </h5>
                            <p className="text-lg">{applicantAddress}</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-4 my-8">
                        <div>
                            <p className="text-sm">
                                Ihre Zeichen, Ihre Nachricht
                            </p>
                        </div>
                        <div>
                            <div className="mb-5">
                                <h5 className="text-sm">Unser Zeichen</h5>
                                <p className="text-sm ">
                                    ROP-SG27-1071.Test-10-51-68
                                </p>
                            </div>
                            <div className="mb-5">
                                <h5 className="text-sm">Email</h5>
                                <p className="text-sm ">{emailAdmin}</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-5">
                                <h5 className="text-sm">Bearbeiter(in)</h5>
                                <p className="text-sm "> {nameAdmin}</p>
                            </div>
                            <div className="mb-5">
                                <h5 className="text-sm">Telefon / Telefax</h5>
                                <p className="text-sm ">{telephone}</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-5">
                                <h5 className="text-sm">Regensburg</h5>
                                <p className="text-sm ">{todayDate}</p>
                            </div>
                            <div className="mb-5">
                                <h5 className="text-sm">Zimmer-Nr</h5>
                                <p className="text-sm ">{roomNumber}</p>
                            </div>
                        </div>
                    </div>

                    <div className="font-bold my-6">
                        <h2>Förderprogramm „Digitalbonus“</h2>
                        <h2>Programmvariante Digitalbonus Standard</h2>
                        <h2>
                            Zuwendung für die Firma Lösungsanbieter GmbH in der
                            Betriebsstätte in
                        </h2>
                        <h2>83940 München</h2>
                        <h2>für Digitalisierung der Kundenberatung</h2>
                        <h2>Vorgangsnummer: 202203011234567</h2>
                        <h2>Elektronischer Antrag vom 01.03.2022</h2>
                    </div>

                    <div className="my-4">
                        <p>
                            Sehr geehrte Damen und Herren, sehr geehrte
                            «Organisation_Name of Contact Person», die Regierung
                            der Oberpfalz erlässt folgenden
                        </p>
                    </div>

                    <div className="my-4">
                        <h4 className="text-center font-bold text-2xl my-6">
                            Zuwendungsbescheid:
                        </h4>
                        <p>
                            Aufgrund der Ermächtigung durch das Bayerische
                            Staatsministerium für Wirtschaft, Landesentwicklung
                            und Energie bewilligt die Regierung der Oberpfalz
                            der Firma Lösungsanbieter GmbH als Projektförderung
                            einen Zuschuss im Wege der Anteilfinanzierung bis zu
                            einer Höhe von
                        </p>
                    </div>

                    <div className="my-4">
                        <h3 className="text-center text-lg font-bold">
                            6700 Euro
                        </h3>
                        <p className="text-center mb-10">
                            (i. W. sechstausendsiebenhundert Euro).
                        </p>

                        <p className="mb-4">
                            Die Bewilligung der Zuwendung erfolgt der Höhe nach
                            unter dem Vorbehalt der späteren endgültigen
                            Entscheidung{" "}
                            <span className="font-bold">
                                (vorläufige Bewilligung)
                            </span>
                            .
                        </p>

                        <p className="mb-4">
                            Die Zuwendungshöhe wird nach Durchführung der
                            Maßnahme auf Basis der tatsächlich zuwendungsfähigen
                            Ausgaben abschließend entsprechend des Ergebnisses
                            der Prüfung des Verwendungsnachweises durch einen
                            Schlussbescheid festgesetzt. Ermäßigen sich die im
                            Finanzierungsplan dieses Bescheides veranschlagten
                            zuwendungsfähigen Ausgaben, erhöhen sich die
                            Deckungsmittel oder treten neue Deckungsmittel hinzu
                            (Fälle der Nr. 2 BNZW), verringert sich die
                            Zuwendung anteilig. Betragen die zuwendungsfähigen
                            Ausgaben nach Verwendungsnachweisprüfung weniger als
                            4.000,00 EUR, bleibt auch vorbehalten, diesen
                            Bewilligungsbescheid mit dem Schlussbescheid
                            vollständig aufzuheben.
                        </p>

                        <p>
                            Der Zuschuss wird als Digitalbonus{" "}
                            <span className="font-bold">Standard </span> gewährt
                            und entspricht einem Anteil von 50 Prozent der
                            zuwendungsfähigen Ausgaben, beschränkt auf den gemäß
                            Nr. 5.3.1 der Richtlinien zum Förderprogramm
                            „Digitalbonus“ festgelegten Förderhöchstbetrag von{" "}
                            <span>10.000 EUR</span> /
                        </p>
                    </div>
                </div>
            </PDFExport>
            <div className="mt-10 h-12 flex justify-end">
                <button
                    type="button"
                    className="items-center w-40 text-center px-4 py-2 border mr-8 border-transparent font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleExportPdf}
                >
                    Download
                </button>
            </div>
        </>
    );
}
