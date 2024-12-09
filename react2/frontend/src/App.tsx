import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderList from "./components/orderList";
import OrderForm from "./components/OrderForm";
import OrderDetails from "./components/OrderDetails";
import './App.css';


function App() {
    return (
        <Router>
            <div>
                <h1>Flower Shop Orders</h1>
                <Routes>
                    <Route
                        path="/"
                        element={<OrderList />}
                    />
                    <Route path="/add" element={<OrderForm />} />
                    <Route path="/order/:id" element={<OrderDetails />} />
                    <Route path="*" element={<h2>404 - Page Not Found</h2>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
