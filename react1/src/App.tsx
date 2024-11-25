import React from 'react';
import './App.css';
import OrderList from "./components/orderList";

function App() {
  return (
      <div className="App">
        <h1>Flower Shop Orders</h1>
          <OrderList ></OrderList>
      </div>
  )
}

export default App;
