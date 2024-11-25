import Order from "./order";


const OrderItem = ({order, onDelete}: {order: Order; onDelete: () => void}) => {
    return (
        <li>
            <p>
                Customer: {order.customerName}
            </p>
            <p>
                Total: {order.total.toFixed(2)}zł
            </p>
            <button onClick={onDelete}>Delete</button>
        </li>
    );
};

export default OrderItem;