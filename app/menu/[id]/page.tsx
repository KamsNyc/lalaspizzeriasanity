import React from 'react'

interface PageProps {
    params: {
      id: string;
    };
  }
  
  function Page({ params }: PageProps) {
    const { id } = params;
    return (
      <div>
        {id}
        {/* add menu images */}
        {/* allow user to add to cart?? */}
      </div>
    );
  }

export default Page
