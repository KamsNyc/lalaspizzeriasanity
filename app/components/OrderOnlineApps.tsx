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

function OrderOnlineApps() {
  const { toast } = useToast();

  return (
    <div className="fixed z-50 bottom-5 right-5">
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
              className="bg-red-500 px-4 py-4 rounded-full font-bold text-white cursor-pointer"
            >
                <Link target="_blank" href={'https://food.google.com/chooseprovider?restaurantId=/g/11vbwq39_x&g2lbs=ANTchaMtE1BCQDHt4Ea-hFX13wS22z8-63wmWQC0bRniHeMYkHvQ03bviPFSOWEiCadnihfMkWDs9biXWnEITve6unxZp61JqqEc-8xJA0LSXKli0xKn5mlKwbvbGHrEOoCi8MToHYbNTmCSXB0lzp-9jbzfQqihAQ%3D%3D&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=HuiNZYG0NM2t5NoP49uTgAc&ei=HuiNZYG0NM2t5NoP49uTgAc&fo_s=OA&opi=89978449&orderType=1&sei=CRur8-DGM2SaEa4OU-PwLE1g&utm_campaign&utm_source=search'}>
              Click To Order
              </Link>
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>Order Online or Pickup</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default OrderOnlineApps;
