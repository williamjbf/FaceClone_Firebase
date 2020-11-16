import senna from "./resources/stories-fb.jpg"
import zac from "./resources/zac.jpeg"
import cat from "./resources/cat.jpeg"
export default function () {

    return (
        <div className="stories">
            <div className="storiesCard" style={{ backgroundImage: `url(${senna})` }}>
                <p> William Jefferson</p>
            </div>
            <div className="storiesCard" style={{ backgroundImage: `url(${zac})` }}>
                <p> William Jefferson</p>
            </div>
            <div className="storiesCard" style={{ backgroundImage: `url(${cat})` }}>
                <p> William Jefferson</p>
            </div>
            <div className="storiesCard" style={{ backgroundImage: `url(${senna})` }}>
                <p> William Jefferson</p>
            </div>
            <div className="storiesCard" style={{ backgroundImage: `url(${cat})` }}>
                <p> William Jefferson</p>
            </div>
        </div>)
}

