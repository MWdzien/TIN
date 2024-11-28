import {addOrder, deleteOrder, getAllOrders, getOrder} from "../controllers/orderController";
import express from "express";

const orderRouter = express.Router();

orderRouter.get('/', getAllOrders);
orderRouter.get('/:id', getOrder);
orderRouter.post('/', addOrder);
orderRouter.delete('/:id', deleteOrder);

export default orderRouter;