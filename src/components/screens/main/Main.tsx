import { FC } from 'react';
import Category from './Category';
import '../../css/Main.css'
import Logo from '../../component/Logo';
import Items from './Items';

const Main: FC = () => {
    return (
        <div className='Common'>
            <Logo />
            <Category />
            <Items />
        </div>
    )
}
export default Main;