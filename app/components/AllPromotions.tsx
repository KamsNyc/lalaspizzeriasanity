import React from 'react';

type Deal = {
  deal_number: number;
  title: string;
  description: string;
  price?: number;
}

const AllPromotions = () => {

  const deals: Deal[] =[ 
    // Adding price is optional (deal_number, title, description, price)
  {
    deal_number: 1,
    title: 'Buy any 2 slices, Get a soda can free',
    description: "Available 7 days from 11AM - 2PM",
  },
  {
    deal_number: 2,
    title: 'FREE LOCAL DELIVERY',
    description: "Available Queens Village (1 mile)",
  }
  
]

  return (
    <div className="deals-container p-8 bg-gray-50 mt-10 rounded-md">
      <h2 className="text-3xl font-bold mb-6">Current Deals</h2>
      {
        deals && deals.map((deal) => (
          <div className="deal-item border-b pb-4 mb-4" key={deal.deal_number}>
            <span className='text-xl font-bold uppercase text-[#E32B2B]'>Deal #{deal.deal_number}</span>
          <h2 className="text-lg font-semibold uppercase">{deal.title}</h2>
          <p className="deal-description font-medium text-gray-700 mb-2">{deal.description}</p>
          {deal.price && <span className="deal-price text-green-600 font-medium">${deal.price}</span>}
        </div>   
        ))
      }
    </div>
  );
}

export default AllPromotions;
