import { words } from "components/assets/constant";
import { FC } from "react";
import '../../css/Main.css'

const Menu: FC = () => {
    return (
        <div className="menuContainer">
            <button className="rounded-button">{words.add}</button>
            <button className="rounded-button">{words.login}</button>
        </div >
    )
}
export default Menu;