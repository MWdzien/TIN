import {Order} from "./Order";
import React from "react";
import {Link} from "react-router-dom";


const OrderItem: React.FC<{order: Order, onDelete: () => void}> = ({order, onDelete}: {order: Order, onDelete: () => void}) => {
    const handleDelete = async () => {
        await fetch(`http://localhost:3001/orders/${order.id}`, {
            method: "DELETE"
        });
        onDelete();
    }

    return (
        <li>
            <Link to={`/order/${order.id}`}>
                <p>Customer Name: {order.customerName}</p>
            </Link>
            <p>Total: {order.total.toFixed(2)}zł</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default OrderItem;