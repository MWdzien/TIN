import express from 'express';
import cors from "cors";
import orderRouter from "./routes/orderRouter";
import bodyParser from 'body-parser'

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.use('/orders', orderRouter);

app.listen(3001, () => {
    console.log(`Server is running at http://localhost:3001/orders`);
});