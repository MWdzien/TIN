import pool from "../database/database"

export interface Order {
    id?: number;
    customerName: string;
    status: 'pending' | 'cancelled' | 'completed';
    date: string;
    total: number;
}


/*export const getOrderAsync = async (id:number): Promise<Order> => {
    const [res] = await pool.query('SELECT * FROM orders WHERE id = ?', [id]);
    return res[0] as Order;
}*/

export const createOrderAsync = async (order: Order): Promise<void> => {
    const {customerName, status, date, total} = order;
    await pool.query('INSERT INTO Orders (customerName, status, date, total) VALUES (?, ?, ?, ?)', [customerName, status, date, total]);
}

export const deleteOrderAsync = async (id: number): Promise<void> => {
    await pool.query('DELETE FROM orders WHERE id = ?', [id]);
}

export const getAllOrdersAsync = async (): Promise<Order[]> => {
    const [res] = await pool.query('SELECT * FROM orders');
    return res as Order[];
}