import express from 'express';
import orderRoutes from './routes/orderRoutes'
import path from "node:path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', orderRoutes);

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000/orders`);
});

export default app;
