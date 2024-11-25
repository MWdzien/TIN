

const OrderValidator = ({inputValue, focused}: {inputValue: string, focused: boolean}) => {
    return (
        <div>
            {inputValue.length < 3 && focused && (
                <p style={{ color: "red" }}>Name must be at least 3 characters long</p>
            )}
        </div>
    );
};

export default OrderValidator;