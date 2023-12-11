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
      </div>
    );
  }

export default Page
