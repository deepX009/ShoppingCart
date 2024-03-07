
import React from 'react';

const Cart = ({ cart, increaseQuantity, decreaseQuantity, emptyCart, total }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity} - ${item.price.toFixed(2)}{' '}
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={emptyCart}>Empty Cart</button>
    </div>
  );
};

export default Cart;
