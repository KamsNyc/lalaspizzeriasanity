import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

function OrderOnline() {
  return (
    
    <div className='fixed z-50 bottom-5 right-5'>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
        
    <span className="bg-red-500 px-4 py-4 rounded-full font-bold text-white cursor-pointer" data-glf-cuid="ff20a1ac-2080-48fa-9d59-188660b7f6fd" data-glf-ruid="bb2f46b8-ab25-445c-ba2d-2319005612cb" >Click To Order</span>
<script src="https://www.fbgcdn.com/embedder/js/ewm2.js" defer async ></script>  
    </TooltipTrigger>
    <TooltipContent>
      <p>Order Free Delivery And Fee Free</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

    </div>
  )
}

export default OrderOnline

