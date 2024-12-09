import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import OrderRoutes from "./routes/OrderRoutes";

const app = express();

app.use(bodyParser.json());
app.use('/', OrderRoutes)

app.listen(3000, () => {
    console.log(`API is running on http://localhost:3000`);
});