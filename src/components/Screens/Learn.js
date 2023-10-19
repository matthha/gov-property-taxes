import { theCourses } from "../Courses"
const Learn = ({screen, setScreen}) => {
    return (
        <div>
            The content on the Learn page.
            {/* map through the courses to show what's available, create the cards in map */}
            <div className="g4">
                {theCourses.map((a,b)=>
                    <div className="tile g2" key={b}><h2>{a[0]}</h2><h3>In Person</h3><p>$3250</p><button onClick={(e) => setScreen(a[2])}>View Course</button></div>
                )}
            </div>
        </div>
    )
    // {results.length > 0 && results.map((result, index) => <li key={index} onClick={(e) => chooseResult(result)}>{result}</li>)}
}
export default Learn