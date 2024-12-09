import express from "express";
import {deleteOrder, getOrder, getOrders, postOrder, putOrder} from "../controllers/OrderController";

const router = express.Router();

router.get('/orders', getOrders)
router.get('/orders/:id', getOrder)
router.post('/orders', postOrder)
router.put('/orders/:id', putOrder)
router.delete('/orders/:id', deleteOrder)


export default router;