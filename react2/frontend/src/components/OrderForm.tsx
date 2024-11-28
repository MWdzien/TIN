import React, {useState} from "react";

interface Props {
    onOrderAdded: () => void;
}

const OrderForm: React.FC<Props> = ({onOrderAdded}) => {
    const [customerName, setCustomerName] = useState("");
    const [status, setStatus] = useState("pending");
    const [date, setDate] = useState("");
    const [total, setTotal] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newOrder = {
            customerName,
            status,
            date,
            total: Number(total)
        };

        await fetch("http://localhost:3001/orders", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newOrder)
        });

        onOrderAdded();
        setCustomerName("");
        setStatus("pending");
        setDate("");
        setTotal("");
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={"Customer Name"}
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
            </select>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <input
                type="number"
                step="0.01"
                placeholder="Total"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                required
            />
            <button type="submit">Add Order</button>
        </form>
    )
}

export default OrderForm