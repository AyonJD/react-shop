import './Cart.css'

const Cart = (props) => {
    return (
        <div>
            <div className='container text-end'>
                <i className="fa-solid fa-cart-shopping text-success my-5"><sup className='p-1'>{ props.count }</sup></i>
            </div>
        </div>
    );
};

export default Cart;