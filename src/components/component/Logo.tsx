import { FC } from "react";
import '../css/Main.css'
import { urls, words } from "../assets/constant";

const Logo: FC = () => {
    return (

        <div className='textCenter column'>
            <img src={urls.main_Icon96px} alt='MainIcon' className='mainIcon' />
            <strong>{words.title}</strong>
        </div>

    )
}
export default Logo;