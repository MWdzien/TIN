import path from "path";
import fs from "fs";
import {Order} from "../models/Order";

const dataFilePath = path.join(__dirname, 'data.json');

export const readDataFromFile = (): Order[] => {
    if (!fs.existsSync(dataFilePath)) {
        fs.writeFileSync(dataFilePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data) as Order[];
};

export const writeDataToFile = (data: Order[]): void => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};
