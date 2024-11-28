const OrderValidator = ({inputValue, focused}: {inputValue: string | undefined, focused: boolean}) => {
    return (
        <div>
            {inputValue && inputValue.length < 3 && focused && (
                <p className="error">Attribute must be at least 3 characters long</p>
            )}
        </div>
    )
};

export default OrderValidator;