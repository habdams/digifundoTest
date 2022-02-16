import { Stack, AddressBook, Wrench, UserCircle, CaretDown } from "phosphor-react";

const project = [
    {name: 'Jane Cooper', title: 'Regional Paradigm Technician', role: 'Admin', email: 'jane.cooper@example.com' },
    {name: 'Cody Fisher', title: 'Product Directives Officer', role: 'Owner', email: 'cody.fisher@example.com' },
    // More people...
    ]

const myForm= {
        "unternehmen_weniger": "true",
        "unternehmen_jahresumsatz": "true",
        "unternehmen_jahresbilanzsumme": "true",
        "gewerbliche_wirtschaft": "true",
        "gewerbesteuer": "false",
        "unternehmen_freiberuflich": "Teilweise",
        "unternehmen_leistungen_freiberuflich": "false",
        "erlaeuterung_freiberuflich": "test",
        "unternehmen_einrichtung": "false",
        "unternehmen_bereich": "false",
        "unternehmen_insolvenzverfahren": "false",
        "auftrag_erteilt": "false",
        "ikt_massnahme": "true",
        "beschreibung_loesung": "Softwareprodukt",
        "bs_bayern": "true",
        "mff_allgemein": "false",
        "mff_digitalbonus": "eine",
        "mff_digitalbonus_text": "Ja",
        "elster_anmeldung": "true",
        "betriebsaufspaltung": "true",
        "finanzierung_nutzung_massnahme": "Finanzierung und Nutzung erfolgen durch das Besitz- und Betriebsunternehmen gemeinsam",
        "name_firma": "Firma Grandierè AG",
        "strasse_firma": "Zillestraße",
        "hausnr_firma": "17",
        "plz_firma": "10585",
        "ort_firma": "Berlin",
        "landkreis_firma": "Regensburg, kreisfreie Stadt",
        "regierungsbezirk_firma": "Oberpfalz",
        "website_firma": "",
        "email_firma": "test@web.de",
        "telefon_firma": "1234",
        "kontoinhaber_firma": "Muster AG",
        "bank_firma": "Musterbank",
        "iban_firma": "DE89370400440532013000",
        "rechtsform_auswahl": "Aktiengesellschaft (AG)",
        "rechtsform_sonst": "",
        "rechtsform": "Aktiengesellschaft (AG)",
        "registergericht": "Berlin",
        "firmeninhaber": {
            "firmeninhaber-item": {
                "anrede_inhaber": "Frau",
                "name_inhaber": "Mustermann",
                "vorname_inhaber": "Marianne",
                "email_inhaber": "",
                "telefon_inhaber": "12",
                "beteiligung": "100",
                "funktion_inhaber": "Inhaberin"
            }
        },
        "gesetzliche_vertreter": {
            "gesetzliche_vertreter-item": {
                "anrede_vertreter": "Herr",
                "name_vertreter": "Mustermann",
                "vorname_vertreter": "Moritz",
                "email_vertreter": "M.M@test.de",
                "telefon_vertreter": "123",
                "funktion_vertreter": "Geschäftsführer"
            }
        },
        "anrede_ansprech": "",
        "funktion_ansprech": "",
        "name_ansprech": "",
        "vorname_ansprech": "",
        "email_ansprech": "",
        "telefon_ansprech": "",
        "adressat1": "Herrn Geschäftsführer Moritz Mustermann",
        "adressat2": "",
        "adressat3": "",
        "gruendungsjahr": "2013",
        "l_jahr": "2020",
        "beschaeftigte_l_jahr": "10",
        "umsatz_l_jahr": "1234567",
        "bilanzsumme_l_jahr": "123456789",
        "keine_bilanz": "false",
        "bemerkungen_ku": "Nach Treu und Glauben geschätzt",
        "branchenart": "Gastgewerbe und Tourismus",
        "beschreibung_taetigkeit": "Restaurant",
        "foerderbereich_auswahl_2": "it",
        "art_digitalbonus_auswahl_2": "standard",
        "az_digitalbonus": "1345",
        "datum_digitalbonus": "2021-06-23",
        "foerderbereich_auswahl": "it",
        "art_digitalbonus_auswahl": "standard",
        "foerderart_1": "plus",
        "foerderart": "plus",
        "foerderbereich": "IT-Sicherheit (siehe Nr. 2.2 Förderrichtlinie)",
        "art_digitalbonus": "Digitalbonus Standard",
        "foerderantrag_auswahl_1": "produkte",
        "foerderantrag": "Entwicklung, Einführung oder Verbesserung von Produkten, Dienstleistungen, Prozessen, durch IKT-Hardware, IKT-Software sowie Migration und Portierung von IT-Systemen und IT-Anwendungen",
        "kurzbez_massnahme": "ERP-System",
        "ort_der_durchfuehrung": {
            "ort_der_durchfuehrung-item": [
                {
                    "plz_durchfuehrung": "98765",
                    "ort_durchfuehrung": "Landshut",
                    "landkreis_durchfuehrung": "Landshut, kreisfreie Stadt",
                    "regierungsbezirk_durchfuehrung": "Niederbayern"
                },
                {
                    "plz_durchfuehrung": "12345",
                    "ort_durchfuehrung": "Schierling",
                    "landkreis_durchfuehrung": "Regensburg, Landkreis",
                    "regierungsbezirk_durchfuehrung": "Oberpfalz"
                }
            ]
        },
        "beginn_durchfuehrung": "2022-07-05",
        "ende_durchfuehrung": "2022-07-19",
        "plz_durchfuehrung": "98765",
        "ort_durchfuehrung": "Landshut",
        "landkreis_durchfuehrung": "Landshut, kreisfreie Stadt",
        "regierungsbezirk_durchfuehrung": "Niederbayern",
        "investitionsort2": "12345; Schierling; Regensburg, Landkreis; Oberpfalz",
        "investitionsort3": "",
        "investitionsort4": "",
        "investitionsort5": "",
        "massnahme_ausgangslage": "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
        "massnahme_loesung": "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
        "massnahme_ergebnis": "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
        "digitalbonus_art": "Digitalbonus Plus",
        "innovationsgehalt": "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
        "bestaetigung_mietkauf": "true",
        "bestaetigung_externe": "true",
        "vorsteuer": "true",
        "gesamtausgaben": "50000",
        "zuschuss_plus": "25000",
        "bankkredit": "",
        "eigenmittel": "25000",
        "gesamtsumme": "50000",
        "externe_anbieter": {
            "externe_anbieter-item": [
                {
                    "name_externer": "DL1",
                    "strasse_externer": "",
                    "hausnr_externer": "",
                    "plz_externer": "",
                    "ort_externer": "",
                    "dienstleistung": "Hardware",
                    "kosten_dienstleistung": "25000",
                    "angebot_externer": {
                        "angebot_externer-item": {
                            "file": {
                                "_content-type": "application/pdf",
                                "_description": "",
                                "_id": "assistants.77CA3BF998F155C2E6E35DDED6C38B35718E2614",
                                "_length": "91159",
                                "__text": "Richtlinien Digitalbonus_2021 (1).pdf"
                            }
                        }
                    }
                },
                {
                    "name_externer": "DL",
                    "strasse_externer": "",
                    "hausnr_externer": "",
                    "plz_externer": "",
                    "ort_externer": "",
                    "dienstleistung": "Software",
                    "kosten_dienstleistung": "25000",
                    "angebot_externer": {
                        "angebot_externer-item": {
                            "file": {
                                "_content-type": "application/pdf",
                                "_description": "",
                                "_id": "assistants.DCC0EC5006FD5BF3F65CCBC20596E7FB4AB88674",
                                "_length": "91159",
                                "__text": "Richtlinien Digitalbonus_2021 (2).pdf"
                            }
                        }
                    }
                }
            ]
        },
        "beteiligungen1": "false",
        "beteiligungen2": "false",
        "beteiligungen3": "true",
        "beteiligungen4": "false",
        "weitere_unternehmen": {
            "weitere_unternehmen-item": {
                "verbundenes_unternehmen_name": "TEST VU"
            }
        },
        "unternehmen_demi": "Firma Grandierè AG,TEST VU",
        "unternehmen_strassenverkehr": "false",
        "unternehmen_entstanden": "false",
        "unternehmen_hervorgegangen": "false",
        "weitere_beihilfen": {
            "keine": {
                "_label": "Über die beantragte Beihilfe hinaus wurden im laufenden sowie in den zwei vorangegangenen Steuerjahren <strong>keine</strong> De-minimis-Beihilfen nach De-minimis-Verordnungen gewährt.",
                "__text": "false"
            },
            "weitere": {
                "_label": "Über die beantragte Beihilfe hinaus wurden im laufenden sowie in den zwei vorangegangenen Steuerjahren <strong>weitere</strong> De-minimis-Beihilfen gewährt.",
                "__text": "true"
            },
            "weitereg": {
                "_label": "Über die beantragte Beihilfe hinaus wurden <strong>weitere De-minimis-Beihilfen beantragt, aber noch nicht gewährt.</strong>",
                "__text": "true"
            }
        },
        "weitere_de_minimis_beihilfen": {
            "weitere_de_minimis_beihilfen-item": {
                "datum_bewilligungsbescheid": "2021-07-05",
                "beihilfegeber": "reg opf",
                "rechtsgrundlage": "VO",
                "form_beihilfe": "Zuschuss",
                "foerdersumme_beihilfe": {
                    "_currency": "EUR",
                    "__text": "5000"
                },
                "beihilfebetrag": {
                    "_currency": "EUR",
                    "__text": "5000"
                }
            }
        },
        "noch_nicht_genehmigte_de_minimis_beihilfen": {
            "noch_nicht_genehmigte_de_minimis_beihilfen-item": {
                "datum_antragstellung": "2021-07-01",
                "beihilfegeber_nicht_gewaehrt": "reg opf",
                "rechtsgrundlage_nicht_gewaehrt": "VO",
                "form_beihilfe_nicht_gewaehrt": "Zuschuss",
                "foerdersumme_beihilfe_nicht_gewaehrt": {
                    "_currency": "EUR",
                    "__text": "2000"
                },
                "beihilfebetrag_nicht_gewaehrt": {
                    "_currency": "EUR",
                    "__text": "2000"
                }
            }
        },
        "kombination_beihilfen": "nein",
        "bestaetigung0": "true",
        "bestaetigung1": "true",
        "bestaetigung2": "true",
        "bestaetigung3": "true",
        "bestaetigung4": "true",
        "bestaetigung5": "true",
        "bestaetigung6": "true",
        "bestaetigung7": "true",
        "bestaetigung8": "true",
        "bestaetigung9": "true",
        "bestaetigung10": "true",
        "bestaetigung11": "true",
        "bestaetigung12": "true",
        "bestaetigung13": "false",
        "weitere_beihilfe_1": "2021-07-05; reg opf; VO; Zuschuss; 5000 EUR; 5000 EUR",
        "weitere_beihilfe_2": "",
        "weitere_beihilfe_3": "",
        "weitere_beihilfe_4": "",
        "weitere_beihilfe_5": "",
        "zustimmung_subvention": "true",
        "name_regierung": "Regierung von Niederbayern",
        "strasse_hnr": "Regierungsplatz 540",
        "plz_ort": "84028 Landshut",
        "email_regierung": "digitalbonus@reg-nb.bayern.de",
        "alle_empfaenger": "digitalbonus@reg-nb.bayern.de, digitalbonus@stmwi.bayern.de, digitalbonus@reg-opf.bayern.de",
        "datum": "2022-01-21",
        "art_antrag": "mit ELSTER",
        "digitalbonus_art_sharepoint": "Plus",
        "digitalbonus_kmu_eigenschaft_sharepoint": "",
        "digitalbonus_foerderantrag_sharepoint": "Prod/DL/Proz",
        "digitalbonus_zuschuss_sharepoint": "25000",
        "externe_anbieter_temp": "DL1;DL",
        "_xmlns:pdf": "http://xmlns.cit.de/assistants/pdf",
        "_xmlns:t": "http://xmlns.cit.de/intelliform/transaction",
        "_xmlns:u": "http://xmlns.cit.de/intelliform/user",
        "_t:id": "20220121356490990311",
        "_t:timestamp": "2022-01-21T08:54:09.651Z",
        "_t:sender": "nezo-test.bayern.de",
        "_t:form": "Digitalbonus mit Elster",
        "_t:form-id": "stmwi/Digitalbonus_Elster",
        "_t:customer": "Wirtschaftsministerium",
        "_t:customer-id": "stmwi",
        "_t:client": "ITDLZ-Entwicklung",
        "_t:client-id": "entwicklung",
        "_u:saml_username": "ek-ee8073cecfb4a9ec93c9e6d745e3466f45558be4",
        "_u:sp_auth_token": "ZDAxNzJhMmQwNTZhY2ViNTRiNWM4NzBh",
        "_u:saml_registernummer": "36936",
        "_u:saml_inresponseto": "_0aa829609d24192a6f570428a47e3c976ad7dc",
        "_u:saml_surname": "Firma Grandierè AG",
        "_u:saml_givenname": "",
        "_u:forwarded_sourceport": "36100",
        "_u:saml_hausnummer": "17",
        "_u:saml_ortsteil": "Charlottenburg",
        "_u:saml_rechtsformtext": "Aktiengesellschaft",
        "_u:saml_eid_citizen_qaa_level": "STORK-QAA-Level-3",
        "_u:saml_idnr_akademischergrad": "",
        "_u:saml_strasse": "Zillestraße",
        "_u:saml_kontoid": "du-b214eaffa0ee9de323ad897c747e64938a5c5ea0",
        "_u:saml_datenkranztyp": "StNr",
        "_u:saml_loginType": "elster",
        "_u:saml_registergericht": "Berlin",
        "_u:saml_plz": "10585",
        "_u:saml_idnr_name": "",
        "_u:saml_elstervertrauensniveauidentifizierung": "substanziell",
        "_u:saml_taetigkeit": "",
        "_u:displayName": " Firma Grandierè AG",
        "_u:saml_firmenname": "Firma Grandierè AG",
        "_u:saml_idnr_geburtsdatum": "",
        "_u:saml_taetigkeittext": "",
        "_u:saml_elstervertrauensniveauauthentifizierung": "substanziell",
        "_u:saml_ort": "Berlin",
        "_u:saml_idnr_vorname": "",
        "_u:saml_idnr_geburtsland": "",
        "_u:saml_adresstyp": "Inland",
        "_u:saml_idnr_anschriftkomplett": "",
        "_u:saml_perstype": "NNatPers",
        "_u:saml_registerart": "PR",
        "_u:saml_land": "DE",
        "_u:saml_isttestkonto": "false",
        "_u:saml_idnr_geburtsname": "",
        "_u:saml_unternehmensanschriftkomplett": "Inland,Zillestraße,17,10585,Berlin,Charlottenburg,DE,",
        "_u:forwarded_for": "195.200.70.45",
        "_u:saml_idnr_geburtsort": "",
        "_u:saml_rechtsform": "310",
        "_u:saml_datenuebermittlerpseudonymid": "du-b214eaffa0ee9de323ad897c747e64938a5c5ea0"
    }

const Antragsliste = () => (
    <div className="flex flex-row h-screen">
        <div className="basis-1/4  flex flex-col bg-slate-900  text-white">
            <img src="#" alt="logo" />
            <ul className="my-4">
                <li className=" flex flex-row items-center p-4 gap-x-2 hover:bg-white/5 my-2">
                    <Stack />
                    <a href="#">Förderungsanträge</a>
                </li>

                <li className="flex flex-row items-center p-4 gap-x-2 hover:bg-white/5 my-2">
                    <AddressBook />
                    <a href="#">Kontakte</a>
                </li>

                <li className="flex flex-row items-center p-4 gap-x-2 hover:bg-white/5 my-2">
                    <Wrench />
                    <a href="#">Einstellung</a>
                </li>
            </ul>
        </div>
        <div className="basis-3/4">
            <div className="flex flex-row justify-between bg-white py-4 px-2 shadow-md">
                <h1 className="text-xl text-slate-700">Förderungsanträge</h1>

                <div className="flex flex-row items-center">
                    <span>
                        <UserCircle size={32} />
                    </span>
                    <h3>Max Mustermann</h3>
                    <CaretDown />
                </div>
            </div>
            <div className="flex flex-row justify-evenly h-1/6 items-center gap-x-2 px-2">
                <div className="bg-rose-400 h-3/5 rounded-2xl text-white p-2 flex flex-col justify-center">
                    <div className=" flex flex-row gap-x-2">
                        <h4 className="text-sm">Verbrauchtes Budget 2022</h4>
                        <CaretDown />
                    </div>
                    <p className="text-2xl">12.800.300 $</p>
                </div>

                <div className="bg-blue-400 h-3/5 rounded-2xl text-white p-2 flex flex-col justify-center">
                    <div className=" flex flex-row gap-x-2">
                        <h4 className="text-sm">Verbrauchtes Budget 2022</h4>
                        <CaretDown />
                    </div>
                    <p className="text-2xl">12.800.300 $</p>
                </div>

                <div className="bg-gray-200 h-3/5 rounded-2xl text-slate-900 p-2 flex flex-col justify-center">
                    <div className=" flex flex-row gap-x-2">
                        <h4 className="text-sm">Verbrauchtes Budget 2022</h4>
                        <CaretDown />
                    </div>
                    <p className="text-2xl">12.800.300 $</p>
                </div>
            </div>
            <div>
                <div>

                </div>

                <div> 
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Aktenzeichen
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Vorhaben
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Gemeinde
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Eingangsdatum
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Status
                                                </th>
                                                <th scope="col" className="relative px-6 py-3">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {project.map((person, personIdx) => (
                                                <tr key={person.email} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.title}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.email}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-rkight text-sm font-medium">
                                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                            Edit
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
);
export default Antragsliste
