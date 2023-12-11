import React from 'react'

function page({params}) {
    const {id} = params
  return (
    <div>
      {id}
    </div>
  )
}

export default page
