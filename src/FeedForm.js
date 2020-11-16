import { AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh } from "react-icons/ai"
import profile from "./resources/perfil.jpeg"

export default function(){
    return (
        <div className="feed">

            <div className="feedForm">
                <img src={profile} />
                <input type="text" placeholder="No que você está pensando?" />
            </div>
            <div className="feedIcons">
                <div className="iconSingle">
                    <AiFillVideoCamera />
                    <span> Video ao vivo</span>
                </div>
                <div className="iconSingle img">
                    <AiOutlineFileImage />
                    <span> Imagem</span>
                </div>
                <div className="iconSingle emoji">
                    <AiOutlineMeh />
                    <span> Emote</span>
                </div>
            </div>


        </div>
    )
}