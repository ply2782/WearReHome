import { FC, useCallback } from 'react'
import '../../css/Main.css'

const mokeData: { title: string }[] = [
    { title: 'item_1' },
    { title: 'item_2' },
    { title: 'item_3' },
    { title: 'item_4' },
    { title: 'item_5' },
    { title: 'item_6' },
    { title: 'item_7' },
    { title: 'item_8' },
    { title: 'item_9' },
    { title: 'item_10' },
    { title: 'item_11' },
    { title: 'item_12' },
]

const Items: FC = () => {
    return (
        <ul className='items4Row'>
            {mokeData.map((item, _) => {
                return (
                    <li >
                        <div style={{ backgroundColor: 'ActiveBorder', padding: 20, aspectRatio: 1 / 1 }}></div>
                        {item.title}
                    </li>)
            })}
        </ul>
    )
}
export default Items;