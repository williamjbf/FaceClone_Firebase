import profile from "./resources/perfil.jpeg"
export default function (props) {
    return (
        <div className="feedPosts">

            <div className="feedPostSingle">
                <div className="feedPost_profile">
                    <img src={profile} />
                    <h3>{props.nome}<br /><span>{props.horario}</span></h3>
                </div>

                <div className="feedPost_content">
                    <p> {props.content}</p>
                    <img src={props.img}></img>
                </div>
            </div>
        </div>
    )
}