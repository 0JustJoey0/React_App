import Books from "./Books"
import arrow from "../Photos/arrow.svg"



function RList() {
    return (
        <div className="reading-wrapper">
            <Books className="Book1"/>
            <Books className="Book2"/>
            <Books className="Book3"/>
            <Books className="Book4"/>
            <img className="arrow" src={arrow} alt="arrow"/>
        </div>
    )
}

export default RList
