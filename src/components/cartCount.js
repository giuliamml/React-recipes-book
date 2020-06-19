import React from 'react'

const CartCount = () => {
    return (
      <div className="cart-count">
        <p>{localStorage.length}</p>
      </div>
    );
  };
  

  export default CartCount;