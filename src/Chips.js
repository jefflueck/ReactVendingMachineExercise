import React, { useState } from 'react';
import './Chips.css';

const Chips = () => {
  const [num, setNum] = useState(0);
  const [cost, setCost] = useState(0);
  const moreChips = () => {
    setNum(num + 1);
    setCost(cost + 3);
  };
  return (
    <>
      <div className="Chips">
        <h1>Chips</h1>
        <button onClick={moreChips}>Buy $3.00</button>
        <p>You have bought {num} of Chips</p>
        <p>Please insert ${cost} to dispense item.</p>
        <img src="https://cf.geekdo-images.com/ytrc-5WfwVmAxh9W_FLUWg__opengraph/img/6sgc6WxQd2Nq62P40IbFpzwydRw=/fit-in/1200x630/filters:strip_icc()/pic6855556.png" />
      </div>
      <div className="Chips-button">
        <button>
          <a href="/">Go Back</a>
        </button>
      </div>
    </>
  );
};

export default Chips;
