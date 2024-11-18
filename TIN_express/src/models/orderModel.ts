import pool from "../database/database"

export const getAllOrders = async () => {
    const [res] = await pool.query('SELECT customer, total, id FROM orders');
    return res;
}

export const getOrderById = async (id: number) => {
    const [res]: any = await pool.query('SELECT * FROM orders WHERE id = ?', [id]);
    return res[0];
}

export const createNewOrder = async (orderData: {customer: string, status: string, date: Date, total: number}) => {
    const {customer, status, date, total} = orderData;
    const [res] = await pool.query('INSERT INTO orders (customer, status, date, total) VALUES (?, ?, ?, ?)', [customer, status, date, total]);
    return res;
}

export const deleteOrderById = async (id: number) => {
    const [res] = await pool.query('DELETE FROM orders WHERE id = ?', [id]);
    return res;
}