import React from 'react'

const CartCount = (props) => {
  console.log(props)
    return (
      <div className="cart-count">
        <p>{localStorage.length}</p>
      </div>
    );
  };
  

  export default CartCount;