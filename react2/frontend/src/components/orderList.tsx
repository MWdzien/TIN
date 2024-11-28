import OrderItem from "./orderItem";
import React from "react";
import {Order} from "./Order";

const OrderList: React.FC<{orders: Order[], onDelete: ()=>void}> = ({orders, onDelete}: {orders: Order[], onDelete: ()=>void}) => {
    return (
        <div>
            <h2>Order List</h2>
            <ul>
                {orders.map((order) => (
                    <OrderItem order={order} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
};

export default OrderList;