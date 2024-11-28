import {Order} from "./Order";
import React from "react";


const OrderItem: React.FC<{order: Order, onDelete: () => void}> = ({order, onDelete}: {order: Order, onDelete: () => void}) => {
    const handleDelete = async () => {
        await fetch(`http://localhost:3001/orders/${order.id}`, {
            method: "DELETE"
        });
        onDelete();
    }

    return (
        <li>
            <p>Customer Name: {order.customerName}</p>
            <p>Status: {order.status}</p>
            <p>Date: {order.date}</p>
            <p>Total: {order.total.toFixed(2)}zł</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default OrderItem;