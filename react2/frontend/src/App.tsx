import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import OrderList from "./components/orderList";
import OrderForm from "./components/OrderForm";

function App() {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        const response = await fetch('http://localhost:3001/orders');
        const data = await response.json();
        setOrders(data);
    }

    useEffect(() => {
        fetchOrders();
    }, []);


    return (
    <div className="App">
      <h1>Flower shop orders</h1>
        <OrderForm onOrderAdded={fetchOrders} />
        <OrderList orders={orders} onDelete={fetchOrders}/>
    </div>
    );
}

export default App;
