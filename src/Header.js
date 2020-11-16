import { FaFacebook, FaSearch, FaAlignJustify } from "react-icons/fa";
import{AiFillMessage,AiTwotoneBell,AiOutlineArrowDown} from "react-icons/ai"
export default function () {
    return (
        <div className="header">
            <div className="headerLeft">
                <div className="logo-fb">
                    <FaFacebook />
                </div>
                <div className="search-fb">
                    <FaSearch />
                </div>
                <div className="menu-fb">
                    <FaAlignJustify />
                </div>
            </div>

            <div className="headerRight">
                <div className="btn plus">
                    +
                </div>
                <div className="btn msg">
                    <AiFillMessage/>
                </div>
                <div className="btn bell">
                    <AiTwotoneBell />
                </div>
                <div className="btn arrow">
                    <AiOutlineArrowDown />
                </div>
            </div>
        </div>
    )
}