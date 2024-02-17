import React from 'react';

interface CateringItem {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const CateringMenu: React.FC = () => {
  const cateringItems: CateringItem[] = [
    {
      name: 'Catering Item #1',
      description: 'This is a test description for the catering menu, This is a test description for the catering menu',
      price: 9.99,
      imageUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: 'Catering Item #2',
      description: 'This is a test description for the catering menu, This is a test description for the catering menu',
      price: 5.99,
      imageUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
    {
        name: 'Catering Item #1',
        description: 'This is a test description for the catering menu, This is a test description for the catering menu',
        price: 9.99,
        imageUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: 'Catering Item #2',
        description: 'This is a test description for the catering menu, This is a test description for the catering menu',
        price: 5.99,
        imageUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      },
      {
        name: 'Catering Item #1',
        description: 'This is a test description for the catering menu, This is a test description for the catering menu',
        price: 9.99,
        imageUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: 'Catering Item #2',
        description: 'This is a test description for the catering menu, This is a test description for the catering menu',
        price: 5.99,
        imageUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      },
   
  ];

  return (
    <div className="flex items-center justify-center py-48">
      <h1 className='text-[64px] md:text-[80px] font-bold'>CATERING MENU COMING SOON</h1>
    </div>
    // <div className="flex flex-wrap justify-center gap-12 mt-8">
    //   {cateringItems.map((item, index) => (
    //     <div key={index} className="max-w-lg w-full bg-white rounded-lg overflow-hidden shadow-lg">
    //       <img className="w-full h-40 object-cover object-center" src={item.imageUrl} alt={item.name} />
    //       <div className="p-6">
    //         <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
    //         <p className="text-gray-600 mb-4 sans">{item.description}</p>
    //         <div className="flex items-center justify-between">
    //           <p className="text-gray-800 font-bold">${item.price.toFixed(2)}</p>
    //           <button className="bg-red-500 font-bold text-white px-4 py-2 rounded-full">What&apos;s in it?</button>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default CateringMenu;