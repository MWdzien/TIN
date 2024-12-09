import OrderItem from "./orderItem";
import React, {useEffect, useState} from "react";
import {Order} from "./Order";
import {Link} from "react-router-dom";

const OrderList: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    const fetchOrders = async () => {
        const response = await fetch("http://localhost:3001/orders");
        const data = await response.json();
        console.log(data);
        setOrders(data);
    };


    useEffect(() => {
        fetchOrders();
    }, []);

    const onDelete = async () => {
        fetchOrders();
    }

    return (
        <div>
            <h2>Order List</h2>
            <Link to="/add">
                <button>Add Order</button>
            </Link>
            <ul>
                {orders.map((order) => (
                    <OrderItem order={order} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
};

export default OrderList;