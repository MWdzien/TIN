import {Request, Response} from "express";
import {getAllOrders, getOrderById, createNewOrder, deleteOrderById} from "../models/orderModel";



export const getOrdersPage = async (req: Request, res: Response) => {
    try {
        const orders = await getAllOrders();
        res.render('list', { orders });
    } catch (error) {
        res.status(500).send('Error loading orders');
    }
};

export const getNewOrderForm = (req: Request, res: Response) => {
    res.render('form');
};

export const postNewOrder = async (req: Request, res: Response) => {
    try {
        const { customer, status, date, total } = req.body;
        await createNewOrder({ customer, status, date: new Date(date), total: parseFloat(total) });
        res.redirect('orders');
    } catch (error) {
        res.status(500).send('Error creating order');
    }
};

export const getOrderDetails = async (req: Request, res: Response) => {
    try {
        const id = +req.params.id;
        const order = await getOrderById(id);
        res.render('details', { order });
    } catch (error) {
        res.status(500).send('Error loading order details');
    }
};

export const deleteOrder = async (req: Request, res: Response)=> {
    try {
        const id = +req.params.id;
        await deleteOrderById(id);
        res.redirect('/orders');
    } catch (error) {
        res.status(500).send('Error deleting order');
    }
}