import React, { useState } from 'react';
import './Soda.css';

const Soda = () => {
  const [num, setNum] = useState(0);
  const [cost, setCost] = useState(0);
  const moreSoda = () => {
    setNum(num + 1);
    setCost(cost + 1);
  };
  return (
    <>
      <div className="Soda">
        <h1>Soda</h1>
        <button onClick={moreSoda}>Buy $1.00</button>
        <p>You have bought {num} cans of Soda.</p>
        <p>Please insert ${cost} to dispense item.</p>
        <img src="https://cdn.shopify.com/s/files/1/0752/2329/products/dirtsoda_2048x.jpg?v=1627146083" />
      </div>
      <div className="Soda-button">
        <button>
          <a href="/">Go Back</a>
        </button>
      </div>
    </>
  );
};

export default Soda;
