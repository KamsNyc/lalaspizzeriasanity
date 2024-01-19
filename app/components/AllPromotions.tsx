import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AllPromotions = () => {
  return (
    <div className="deals-container p-8 bg-gray-50 mt-10">
      <h2 className="text-3xl font-bold mb-6">Today's Specials</h2>

      <div className="deal-item border-b pb-4 mb-4">
        <div className="deal-title text-xl font-semibold mb-2">Combo Deal 1</div>
        <div className="deal-description text-gray-700 mb-2">Get 2 slices of pizza + a drink</div>
        <div className="deal-price text-green-600">$9.99</div>
      </div>

      <div className="deal-item border-b pb-4 mb-4">
        <div className="deal-title text-xl font-semibold mb-2">Family Pack</div>
        <div className="deal-description text-gray-700 mb-2">Large pizza + garlic knots + 2 drinks</div>
        <div className="deal-price text-green-600">$24.99</div>
      </div>

      <div className="deal-item border-b pb-4 mb-4">
        <div className="deal-title text-xl font-semibold mb-2">Cheesy Delight</div>
        <div className="deal-description text-gray-700 mb-2">Extra cheese on any pizza for just $1&apos;</div>
        <div className="deal-price text-green-600">$1.00 extra</div>
      </div>

      {/* Add more deal items as needed */}
    </div>
  );
}

export default AllPromotions;
