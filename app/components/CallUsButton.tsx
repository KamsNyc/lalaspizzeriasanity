"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

function CallUsButton() {
  const { toast } = useToast();

  return (
    <div className="fixed z-50 bottom-5 right-[11rem]">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <span
              onClick={() => {
                toast({
                  variant: "destructive",
                  title: "Thank you for order with Lala's Pizzeria",
                  description: "We are always happy to serve you our pizza!",
                });
              }}
              className="bg-[#F7CC32] px-2 py-2 rounded-full font-bold text-black cursor-pointer"
            >
                <Link href={'tel:3474265287'}>
              Call Us
              </Link>
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>Call Us We Offer Free Delivery Local</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default CallUsButton;
