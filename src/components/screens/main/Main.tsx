import { FC } from 'react';
import Category from './Category';
import '../../css/Main.css'
import Logo from '../../component/Logo';
import Items from './Items';
import Menu from './Menu';



const Main: FC = () => {
    return (
        <div className='Common'>
            <Logo />
            <Menu />
            <Category />
            <Items />
        </div>
    )
}
export default Main;