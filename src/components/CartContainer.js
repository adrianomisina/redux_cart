import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
  const dispatch = useDispatch()
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  return (
    <section className='cart'>
      <header>
        <h2>Your Bag</h2>
        {amount < 1 ? (
          <h4 className='empty-cart'>is currently empty 😞</h4>
        ) : (
          <>
            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <footer>
              <hr />
              <div className='cart-total'>
                <h4>
                  total <span>R$ {total.toFixed(2)}</span>
                </h4>
              </div>
              <button className='btn clear-btn' onClick={() => dispatch(openModal())}>Clear Cart</button>                
            </footer>
          </>
        )}
      </header>
    </section>
  );
};

export default CartContainer;
