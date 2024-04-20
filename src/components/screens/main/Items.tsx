import { FC, useCallback, useEffect, useState } from 'react'
import '../../css/Main.css'
import { getItems } from 'components/utils/Api';
import { useNavigate, useNavigation } from 'react-router-dom';



const Items: FC = () => {
    const [items, setItems] = useState<{ id: number, content: string }[]>([]);
    const navigate = useNavigate();

    const goDetail = useCallback((id: number) => () => {
        navigate('/detail', { state: { value: 1234 } });
    }, [])

    return (
        <ul className='items4Row'>
            {items.map((item, _) => {
                return (
                    <li onClick={goDetail(item.id)} key={_}>
                        <div style={{ backgroundColor: 'ActiveBorder', padding: 20, aspectRatio: 1 / 1 }}></div>
                        {item.content}
                    </li>)
            })}
        </ul>
    )
}
export default Items;