import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProduct();
    const [cart,setCart] = useCart(products);
    console.log(typeof(cart))

    const history = useHistory();

    const handleRemove= key=>{
        const newCart = cart.filter(product=>product.key !== key);
        setCart(newCart);

        deleteFromDb(key);
    }

    const handleShipping = ()=>{
       
        //setCart([]);
        //clearTheCart();
        history.push("/shipping");
    }

    return (
        <div className="shop-container">

            <div className="product-container">
               {
                cart.map(product=><ReviewItem product={product} handleRemove={handleRemove}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <div>
                    <h2>this is a children</h2>
                </div>
            <Cart cart={cart}>
                <button onClick={handleShipping} className="btn-regular">Proceed to shipping</button>
            </Cart>
            </div>
          

           
           
        </div>
    );
};

export default OrderReview;