import React from 'react';
import Navbar from './Navbar';
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <>
      <div className="VendingMachine">
        <h1>Would you like something to eat?</h1>
        <img src="https://media.giphy.com/media/3orieJKdBJeQIfKqiY/giphy.gif" />
        <h3>Choices:</h3>
      </div>
      <div>
        <Navbar />
      </div>
    </>
  );
};

export default VendingMachine;
