import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { howItWorks } from "./data";
import Wrapper from "./wrapper";

export default function SimpleProcess() {
  return (
    <div className="w-full my-5 py-10 bg-white">
      <Wrapper 
      heading="Simple process"
      title="How It Works"
      desc="Three easy steps to fresh, clean clothes delivered anywhere in Port Harcourt." 
      mainContent={<SimpleProcessContent />} />
      <div className="w-full flex items-center justify-center pt-4 width-wrapper">
        <Button 
        className="flex items-center justify-center gap-x-4 bg-(--brand-primary) font-medium text-sm lg:text-md text-white px-4 py-2 h-10 w-full lg:w-auto hover:bg-(--brand-primary)"
        render={<a href="/booking" />}>
          <span>Get started today</span>
          <ArrowRight />
        </Button>
       </div>
    </div>
  )
}

function SimpleProcessContent () {
  return (
    <div className="width-wrapper mt-4 lg:my-8 lg:py-8 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {howItWorks.map(({ icon:Icon, label, desc, id}) => (
          <div key={label} className="flex items-center justify-center flex-col gap-y-2 sm:gap-y-3">
            <div className="relative bg-(--brand-primary) w-16 h-16 lg:w-20 lg:h-20 rounded-md flex items-center justify-center text-white">
              <Icon className="size-6 lg:size-8" />
              <div className="w-4 h-4 lg:w-6 lg:h-6 -top-2 -right-3 bg-yellow-400 rounded-full p-4 flex items-center justify-center absolute text-xs sm:text-sm">
                <span>{id}</span>
              </div>
            </div>
            <div className="text-xl sm:text-xl lg:text-2xl font-medium">
              <h2>{label}</h2>
            </div>
            <div className="text-muted-foreground text-center max-w-xs text-sm sm:text-xs md:text-md">
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
