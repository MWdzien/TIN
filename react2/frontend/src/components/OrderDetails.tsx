import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import { Order } from "./Order";

const OrderDetails: React.FC = () => {
    const { id } = useParams();
    const [order, setOrder] = useState<Order | null>(null);

    useEffect(() => {
        const fetchOrder = async () => {
            const response = await fetch(`http://localhost:3001/orders/${id}`);
            if (response.ok) {
                const data = await response.json();
                setOrder(data);
            }
        };

        fetchOrder();
    }, [id]);

    if (!order) {
        return <p>Order not found</p>;
    }

    console.log(order.customerName);

    return (
        <div>
            <h2>Order Details</h2>
            <p>Customer Name: {order.customerName}</p>
            <p>Status: {order.status}</p>
            <p>Date: {order.date}</p>
            <p>Total: {order.total} zł</p>
            <div>
                <Link to="/">
                    <button>Back to order list</button>
                </Link>
            </div>
        </div>
    );
};

export default OrderDetails;
