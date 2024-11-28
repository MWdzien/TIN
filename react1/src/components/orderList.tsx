import React, {useState} from "react";
import OrderItem from "./orderItem"
import OrderValidator from "./orderValidator";
import Order from "./order";




const OrderList = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [customerName, setCustomerName] = useState<string>("");
    const [total, setTotal] = useState<string>("");
    const [focused, setFocused] = useState<boolean>(false);

    const addOrder = (e: React.FormEvent) => {
        e.preventDefault();

        const newOrder: Order = {
            customerName: customerName,
            total: Number(total)
        }

        setOrders(prevOrders => [...prevOrders, newOrder]);
        setCustomerName("");
        setTotal("");
        setFocused(false);
    };

    const removeOrder = (index: number) => {
        setOrders((prevOrders) => prevOrders.filter((_, i) => i !== index));
    }

    return (
        <div>
            <form onSubmit={addOrder} >
                <label>Customer Name</label>

                <input
                    type="text"
                    name="customerName"
                    placeholder="Customer name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    onBlur={() => setFocused(true)}
                />
                <OrderValidator inputValue={customerName} focused={focused} />
                <label>Total price</label>
                <input
                    type="number"
                    name="total"
                    placeholder="Total price"
                    value={total}
                    step="0.01"
                    onChange={(e) => setTotal(e.target.value)}
                    onBlur={() => setFocused(true)}
                />
                <button type="submit">Add order</button>
            </form>

            <ul>
                {orders.map((order, index) => (
                    <OrderItem key={index} order={order} onDelete={() => removeOrder(index)} />
                ))}
            </ul>
        </div>
    );
}

export default OrderList;
