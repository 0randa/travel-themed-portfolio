import NavigationList from "../components/NavigationList"
import Header from "../components/Header"
import "../styles/links.css"

function Links() {
    return (
        <>
            <Header />
            <NavigationList />
            <div className="flightboard"></div>
            <div className="flightboard-header">
                <span>Time</span>
                <span>Flight</span>
                <span>To</span>
                <span>Gate</span>
                <span>Remarks</span>
            </div>
        </>
    )
}

export default Links