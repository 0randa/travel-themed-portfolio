function JournalEntry(props) {

    return (
         <article className="journal-entry">
            <div className="main-image-container">
                <img src={props.mainImage}></img>
            </div>
            <div className="info-container">
                <div className="info-header">
                    <img src={props.gitHubLogo}></img>
                    <span>{props.headerSpan}</span>
                    <a href={props.gitHubLink} target="_blank">GitHub Link</a>
                </div>
                <h2>{props.projectName}</h2>
                <p>{props.timePeriod}</p>
                <p>{props.description}</p>
            </div>
        </article>
    )
}

export default JournalEntry