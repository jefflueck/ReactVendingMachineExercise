import React, { useState } from 'react';
import './FreshSardines.css';

const FreshSardines = () => {
  const [num, setNum] = useState(0);
  const [cost, setCost] = useState(0);
  const moreSardines = () => {
    setNum(num + 1);
    setCost(cost + 2);
  };
  return (
    <>
      <div className="Sardines">
        <h1>Sardines</h1>
        <button onClick={moreSardines}>Buy $2.00</button>
        <p>You have bought {num} cans of Sardines</p>
        <p>Please insert ${cost} to dispense item.</p>
        <img src="https://indo.fish/images/product/Group%2065@2x.png" />
      </div>
      <div className="Sardines-button">
        <button>
          <a href="/">Go Back</a>
        </button>
      </div>
    </>
  );
};

export default FreshSardines;
