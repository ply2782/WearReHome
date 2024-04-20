import axios from "axios";
import { ItemType } from "./Types";

export const getItems = async (): Promise<ItemType[]> => {
    const data = await axios.get('/hello');
    return data.data;
}