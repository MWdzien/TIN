import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import fs from 'fs';
import path from 'path';

const app = express();


app.use(bodyParser.json());

interface Order {
    id: number;
    customerName: string;
    status: 'completed' | 'pending' | 'canceled';
    date: string;
    total: number;
}

const dataFilePath = path.join(__dirname, 'data.json');

const readDataFromFile = (): Order[] => {
    if (!fs.existsSync(dataFilePath)) {
        fs.writeFileSync(dataFilePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data) as Order[];
};

const writeDataToFile = (data: Order[]): void => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};


let orders: Order[] = readDataFromFile();

app.get('/orders', (req: Request, res: Response) => {
    res.status(200).json(orders);
});

app.get('/orders/:id', (req: Request, res: Response) => {
    const id = +req.params.id;
    const order = orders.find(i => i.id === id);

    if (!order){
        res.status(404).json();
    } else {
        res.status(200).json(order);
    }
});

app.post('/orders', (req: Request, res: Response) => {
    const {customerName, status, date, total} = req.body;

    const newOrder: Order = {
        id: orders[orders.length-1].id+1,
        customerName,
        status,
        date,
        total
    };

    orders.push(newOrder);
    writeDataToFile(orders);
    res.status(201).json(newOrder);
});

app.put('/orders/:id', (req: Request, res: Response) => {
    const id = +req.params.id;
    const {customerName, status, date, total} = req.body;

    const orderIdx = orders.findIndex(i => i.id === id);

    orders[orderIdx] = {id, customerName, status, date, total};
    writeDataToFile(orders);
    res.status(200).json(orders[orderIdx]);
});

app.delete('/orders/:id', (req: Request, res: Response) => {
    const id = +req.params.id;
    const orderIdx = orders.findIndex(i => i.id === id);

    orders.splice(orderIdx, 1);
    writeDataToFile(orders);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log(`API is running on http://localhost:3000`);
});