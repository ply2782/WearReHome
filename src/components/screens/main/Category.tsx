import '../../css/Main.css'
import { words } from '../../assets/constant'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import Menu from './Menu';
import axios from 'axios';
const Category: FC = () => {
    const menu = useCallback((name: string) => () => {
        console.log(`name is ${name}`);
    }, []);
    return (
        <ul className='category'>

            {words.category.map((item, _) => {
                return (<li onClick={menu(item)} className='items' key={_}>{item}</li>)
            })}
        </ul>
    )
}
export default Category;