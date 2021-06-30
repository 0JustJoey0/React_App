import Books from "./Books"



function RList() {
    return (
        <div className="reading-wrapper">
            <Books className="Book1"/>
            <Books className="Book2"/>
            <Books className="Book3"/>
            <div className="arrow"></div>
        </div>
    )
}

export default RList
