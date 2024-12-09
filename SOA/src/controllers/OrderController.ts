import {Request, Response} from "express";
import {createNewOrder, getAllOrders, getOrderById, removeOrder, updateOrder} from "../models/Order";



export const getOrders = (req: Request, res: Response) => {
    const orders = getAllOrders();
    res.status(200).json(orders);
}


export const getOrder = (req: Request, res: Response) => {
    const id = +req.params.id;
    const order = getOrderById(id);

    res.status(200).json(order);
}


export const postOrder = (req: Request, res: Response) => {
    const {customerName, status, date, total} = req.body;
    const newOrder = createNewOrder({customerName, status, date, total});

    res.status(201).json(newOrder);
}


export const putOrder = (req: Request, res: Response) => {
    const id = +req.params.id;
    const {customerName, status, date, total} = req.body;

    const order = updateOrder({id, customerName, status, date, total});

    res.status(200).json(order);
}


export const deleteOrder = (req: Request, res: Response) => {
    const id = +req.params.id;
    removeOrder(id);

    res.status(204).send();
}

