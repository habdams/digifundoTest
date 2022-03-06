import Image from "next/image"

export default function NotificationLetter() {
    return (
        <>
            <div>
                <div className="flex justify-end p-2 my-4">
                    <div className="flex flex-row w-1/3 gap-2">
                        <h3 className="text-right text-2xl">Regierung der Oberpfalz</h3>
                        <Image src="/bavarianLogo.png" width={125} height={75} />
                    </div>
                </div>
                <div className="my-4">
                    <div className="w-1/3">
                        <h5 className="text-sm">Regierung der Oberpfalz - 93039 Regensburg</h5>
                        <p className="text-lg">«Organisation__Address of Applicant»</p>
                    </div>
                </div>

                <div className="flex flex-row gap-4 my-8">
                    <div>
                        <p className="text-sm">Ihre Zeichen, Ihre Nachricht</p>
                    </div>
                    <div>
                        <div className="mb-5">
                            <h5 className="text-sm">Unser Zeichen</h5>
                            <p className="text-sm ">ROP-SG27-1071.Test-10-51-68</p>
                        </div>
                        <div className="mb-5">
                            <h5 className="text-sm">Email</h5>
                            <p className="text-sm ">«E-Mail Adress of administrator»</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-5">
                            <h5 className="text-sm">Bearbeiter(in)</h5>
                            <p className="text-sm "> «Name of administrator»</p>
                        </div>
                        <div className="mb-5">
                            <h5 className="text-sm">Telefon / Telefax</h5>
                            <p className="text-sm ">«Telephone of administrator»</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-5">
                            <h5 className="text-sm">Regensburg</h5>
                            <p className="text-sm ">«Today's Date»</p>
                        </div>
                        <div className="mb-5">
                            <h5 className="text-sm">Zimmer-Nr</h5>
                            <p className="text-sm ">«room number»</p>
                        </div>
                    </div>
                </div>

                <div className="font-bold my-6">
                    <h2>Förderprogramm „Digitalbonus“</h2>
                    <h2>Programmvariante Digitalbonus «Request_Standard or plus?»</h2>
                    <h2>Zuwendung für die Firma «Organisation_Name» in der Betriebsstätte in</h2>
                    <h2>«Organisation_Postcode + Town»</h2>
                    <h2>für „«Request_Title»“</h2>
                    <h2>Vorgangsnummer: «Request_ID»</h2>
                    <h2>Elektronischer Antrag vom «Request_Date»</h2>
                </div>

                <div className="my-4">
                    <p>
                        Sehr geehrte Damen und Herren, sehr geehrte «Organisation_Name of Contact Person»,
                        die Regierung der Oberpfalz erlässt folgenden

                    </p>
                </div>

                <div className="my-4">
                    <h4 className="text-center font-bold text-2xl my-6">Zuwendungsbescheid:</h4>
                    <p>
                        Aufgrund der Ermächtigung durch das Bayerische Staatsministerium für Wirtschaft, Landesentwicklung und Energie bewilligt die Regierung der Oberpfalz der Firma «Organisation__Name» als Projektförderung einen Zuschuss im Wege der Anteilfinanzierung bis zu einer Höhe von
                    </p>
                </div>

                <div className="my-4">
                    <h3 className="text-center text-lg font-bold">«Total amount of fund_in Numbers»  Euro</h3>
                    <p className="text-center mb-10">(i. W.«Total amount of fund_written out» Euro).</p>

                    <p className="mb-4">
                        Die Bewilligung der Zuwendung erfolgt der Höhe nach unter dem Vorbehalt der späteren endgültigen Entscheidung <span className="font-bold">(vorläufige Bewilligung)</span>.
                    </p>

                    <p className="mb-4">
                        Die Zuwendungshöhe wird nach Durchführung der Maßnahme auf Basis der tatsächlich zuwendungsfähigen Ausgaben abschließend entsprechend des Ergebnisses der Prüfung des Verwendungsnachweises durch einen Schlussbescheid festgesetzt. Ermäßigen sich die im Finanzierungsplan dieses Bescheides veranschlagten zuwendungsfähigen Ausgaben, erhöhen sich die Deckungsmittel oder treten neue Deckungsmittel hinzu (Fälle der Nr. 2 BNZW), verringert sich die Zuwendung anteilig. Betragen die zuwendungsfähigen Ausgaben nach Verwendungsnachweisprüfung weniger als 4.000,00 EUR, bleibt auch vorbehalten, diesen Bewilligungsbescheid mit dem Schlussbescheid vollständig aufzuheben.
                    </p>

                    <p>
                        Der Zuschuss wird als Digitalbonus <span className="font-bold">«Fundingrequest_Standard or plus?» </span> gewährt und entspricht einem Anteil von 50 Prozent der zuwendungsfähigen Ausgaben, beschränkt auf den gemäß «if Request_standard: Nr. 5.3.1» / «if Request_plus: Nr. 5.3.2» der Richtlinien zum Förderprogramm „Digitalbonus“ festgelegten Förderhöchstbetrag von <span>«if Request_standard: 10.000,00 EUR»</span>  /
                        <span>«if Request_plus: 50.000,00 Euro».</span>
                    </p>
                </div>
            </div>
        </>
    )
}