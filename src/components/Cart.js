import Layout from "./Layout";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, clearCart } from "../hooks/cartSlice";

const Cart = () => {
    let cartItems = useSelector((store) => store.cart.item);
    let dispatch = useDispatch();

    function handleClick(item) {
        dispatch(removeItem(item))
    }

    function handleClearClick() {
        dispatch(clearCart())
    }

    return (
        <>
            <h1>cart</h1>
            <button className='m-2 p-2 bg-black text-white rounded-lg' onClick={handleClearClick}>Clear cart</button>
            {
                cartItems.length ? cartItems.map((item) => {
                    return (
                        <>
                            <div className='flex'>
                                <p>
                                    {item}
                                </p>
                                <button onClick={() => handleClick(item)} className='bg-black text-white m-2 p-2 rounded-lg'>remove</button>
                            </div>
                        </>
                    )
                }) : <h2>your cart is empty</h2>
            }
        </>
    )
}


export default Cart;