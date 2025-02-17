import React from "react";
import "../styles/general.css";
import "../styles/projects.css"
import Header from "../components/Header";
import NavigationList from "../components/NavigationList";
import JournalEntry from "../components/JournalEntry";

import data from "../data/travel_journal"


function Projects() {
    const journalEntries = data.map(x => {
        return (
            <JournalEntry 
                {...x}
            />
        )
    })

    return (
        <>
            <Header />
            <NavigationList />
            <main className="journal-container">
                {journalEntries}
              
            </main>
        </>
    )
}

export default Projects