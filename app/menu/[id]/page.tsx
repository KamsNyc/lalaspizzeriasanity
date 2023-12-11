import React from 'react'

function page({params}:any) {
    const {id} = params
  return (
    <div>
      {id}
    </div>
  )
}

export default page
