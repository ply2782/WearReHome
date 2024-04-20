import { FC } from "react";
import { useLocation } from "react-router-dom";

const Detail: FC = () => {
    const location = useLocation();

    return (
        <div style={{ backgroundColor: 'red', padding: 30 }}>
            <span>{location.state.value}</span>
        </div>
    )
}
export default Detail;