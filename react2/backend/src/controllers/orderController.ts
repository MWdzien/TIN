import {Request, Response} from "express";
import {createOrderAsync, deleteOrderAsync, getAllOrdersAsync, getOrderAsync, Order} from "../models/orderModel";
import exp from "node:constants";

export const getOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = +req.params.id;
        const order = await getOrderAsync(id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).send("Internal server error while fetching order")
    }
}


export const addOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const newOrder: Order = req.body;
        await createOrderAsync(newOrder)
        res.status(201).json({message: "Created"});
    } catch (error) {
        res.status(500).send("Internal server error while creating order")
    }
}

export const deleteOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params;
        await deleteOrderAsync(Number(id));
        res.status(200).json({message: "Deleted"});
    } catch (error) {
        res.status(500).send("Internal server error while deleting order")
    }
}

export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders = await getAllOrdersAsync();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).send("Internal server error while fetching orders")
    }
}
