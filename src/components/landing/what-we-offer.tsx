import { cn } from "cn";
import { whatWeOfferItems } from "./data";
import Wrapper from "./wrapper";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function WhatWeOffer() {
  return (
    <div className="width-wrapper pb-10">
      <Wrapper 
        heading = "What we Offer"
        title = "Services Built for"
        sideTitle="Your Lifestyle"
        desc = "From everyday wash & fold to premium dry cleaning — we have a service for every need in Port Harcourt."
        mainContent={<WhatWeOfferContent />}
       />
       <div className="w-full flex items-center justify-center">
        <Button 
        className="flex items-center justify-center gap-x-4 bg-(--brand-primary) font-medium text-sm lg:text-md text-white px-4 py-2 h-10 w-full lg:w-auto hover:bg-(--brand-primary)"
        render={<a href="/services" />}>
          <span>See all services</span>
          <ArrowRight />
        </Button>
       </div>
    </div>
  )
}

function WhatWeOfferContent () {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 py-5">
      {whatWeOfferItems.map(({ label, icon:Icon, desc, pricing, href, id}) => (
        <a href={href} key={href} className="bg-white hover:shadow-lg rounded-md py-4 sm:py-8 sm:px-8 flex flex-col items-start justify-start  gap-y-4 sm:gap-y-4 px-4 w-full group">
          <div className={cn("h-8 w-8 sm:h-12 flex items-center justify-center sm:w-12 rounded-lg p-2", (id === 1 || id === 4 || id == 6) && "bg-[#D8F3DC]",  (id === 2 || id === 5 || id == 8) && "bg-[#FEFCE8]", (id === 3 || id === 7) && "bg-[#EFF6FF]")}>
            <Icon className="size-6 sm:size-6" />
          </div>
          <div className="text-black font-medium text-md sm:text-xl md:text-lg">
            <h3>{label}</h3>
          </div>
          <div className="text-muted-foreground text-xs sm:text-md md:text-base">
            <span>{desc}</span>
          </div>
          <a href={href} className="flex items-center justify-between w-full mt-2 sm:mt-4">
            <span className="text-(--brand-primary) text-xs sm:text-sm md:text-md font-medium">{pricing}</span>
            <span className="hidden group-hover:block text-muted-foreground/50">
              <ArrowRight />
            </span>
        </a>
        </a>
      ))}
    </div>
  )
}
