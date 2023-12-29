import React from 'react';

function Deals() {
  return (
    <div className="deals-container">
      <h2 className="deals-heading">Today's Specials</h2>

      <div className="deal-item">
        <div className="deal-title">Combo Deal 1</div>
        <div className="deal-description">Get 2 slices of pizza + a drink</div>
        <div className="deal-price">$9.99</div>
      </div>

      <div className="deal-item">
        <div className="deal-title">Family Pack</div>
        <div className="deal-description">Large pizza + garlic knots + 2 drinks</div>
        <div className="deal-price">$24.99</div>
      </div>

      <div className="deal-item">
        <div className="deal-title">Cheesy Delight</div>
        <div className="deal-description">Extra cheese on any pizza for just $1</div>
        <div className="deal-price">$1.00 extra</div>
      </div>

      {/* Add more deal items as needed */}
    </div>
  );
}

export default Deals;