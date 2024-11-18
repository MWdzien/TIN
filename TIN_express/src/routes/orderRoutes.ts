import {postNewOrder, getNewOrderForm, getOrderDetails, getOrdersPage, deleteOrder} from "../controllers/orderController";
import express from "express";

const router = express.Router();

router.get('/orders', getOrdersPage);
router.get('/orders/new', getNewOrderForm);
router.post('/orders', postNewOrder);
router.get('/orders/:id', async (req: express.Request<{ id: string }>, res: express.Response) => {
    await getOrderDetails(req, res);
});
router.get("/orders/delete/:id", deleteOrder);


export default router;