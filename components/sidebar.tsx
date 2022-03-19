import React, { useState } from "react";
import {
    Stack,
    AddressBook,
    Coins,
    Export
} from "phosphor-react";
import Notes from "./notes";

const navigation = [
    {
        name: "Forderungsantrage",
        icon: Stack,
        current: true,
        children: [
            { name: "Antrag", href: "/antragsliste" },
            { name: "Externe Dokumente", href: "#" },
            { name: "Rechnung", href: "#" },
            { name: "Bestatigung", href: "#" },
        ],
    },
    {
        name: "Budgetplannung",
        icon: Coins,
        current: false,
        children: [{ name: "Planning", href: "#" }],
    },

    {
        name: "Kontakt",
        icon: AddressBook,
        current: false,
    },
];



export default function Sidebar() {
    const [addNote, setAddNote] = useState('')
    const [noteList, setNoteList] = useState([])


    const handleAddNote = () => {
        setNoteList([...noteList, { body: addNote }])
        setAddNote('');
        console.log(noteList.length);
    }

    function handleNewNote(e) {
        let newNote = e.target.value
        setAddNote(newNote);
    }





    return (
        <>
            <div className="h-full bg-gray-50 mt-2">
                <div className="h-screen flex flex-col  bg-gray-50 p-5">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold">Notizen</h3>
                        <Export size={24} />
                    </div>
                    <div className="mb-4">
                        <p className="">Hier ist Platze für Ihre Notizen. Sie können jederzeit darauf zugreifen.</p>
                    </div>
                    <div className="mb-2 text-xs text-gray-400 font-bold">
                        <h5>Anmerkungen</h5>
                    </div>
                    <div className="mb-14 overflow-y-auto border bg-stone-100 rounded-lg p-1">
                        {noteList.map((note, index) =>
                            <Notes note={note.body} id={index} />
                        )}
                    </div>
                    <div className="self-end">

                        <textarea name="" id="newNote" cols={20} rows={5} placeholder="Klicken Sie hier um eine Notizt zu schreiben" value={addNote} className="rounded" onChange={handleNewNote}></textarea>

                        <button type="submit" onClick={handleAddNote} className="my-2 bg-black p-2 rounded-md text-white">Hinweis speichern  </button>


                    </div>
                </div>



            </div>
        </>
    );
}
