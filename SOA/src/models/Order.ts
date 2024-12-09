import {readDataFromFile, writeDataToFile} from "../db/database";

export interface Order {
    id: number;
    customerName: string;
    status: 'completed' | 'pending' | 'canceled';
    date: string;
    total: number;
}

export const getAllOrders = () => {
    return readDataFromFile();
}
export const getOrderById = (id: number) => {
    return readDataFromFile().find(i => i.id === id);
}
export const createNewOrder = (orderData: {customerName: string, status: 'completed' | 'pending' | 'canceled', date: string, total: number}) => {
    const {customerName, status, date, total} = orderData;
    const orders = readDataFromFile();

    const newOrder: Order = {
        id: orders[orders.length-1].id + 1,
        customerName,
        status,
        date,
        total
    }

    orders.push(newOrder)
    writeDataToFile(orders);
    return newOrder;
}
export const updateOrder = (orderData: Order) => {
    const {id, customerName, status, date, total} = orderData;
    const orders = readDataFromFile();
    const orderIndex = orders.findIndex(i => i.id === id);

    orders[orderIndex] = {id, customerName, status, date, total};
    writeDataToFile(orders);
    return orders[orderIndex];
}

export const removeOrder = (id: number) => {
    const orders = readDataFromFile();
    const orderIndex = orders.findIndex(i => i.id === id);

    orders.splice(orderIndex, 1);
    writeDataToFile(orders);
}