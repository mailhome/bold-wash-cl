import { cn } from "cn";
import { Star } from "lucide-react";
import Navbar from "../layout/navbar";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { heroButton, heroList, heroRightItems } from "./data";


export default function Hero() {
  return (
    <section className="w-full relative lg:min-h-[90vh] sm:min-h-[100vh] min-h-[130vh] overflow-hidden">
        <img 
            src="/hero.jpg"
            alt="Professional Laundry Service"
            className="absolute h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-tr from-[#1A3D2E]/90 h-full w-full to-[#385A55]/60" />
        <div className="pt-5 sticky w-full h-full">
            <Navbar />
        </div>
        <div className="z-50 lg:pt-10 lg:pb-10 py-10 grid w-full grid-cols-1 absolute lg:grid-cols-2 gap-x-20  gap-y-10 sm:gap-y-20 width-wrapper">
          <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center gap-y-2 lg:gap-y-8">
            <Button variant="ghost" className="flex items-center justify-start text-white border py-2 lg:py-2 lg:h-10 px-4 border-(--brand-secondary) bg-(--brand-primary)/50 rounded-full">
              <div className="bg-(--brand-accent) w-4 h-4 lg:w-2 lg:h-2 rounded-full " />
              <span className="font-medium text-md ">Aba's Premier Laundr Service</span>
            </Button>
            <div className="text-[26px] lg:text-5xl sm:text-5xl text-white font-semibold text-center lg:text-left pt-5 tracking-wide">
              <h1>We Bring the Freshness. <span className="text-amber-400">You Enjoy the Comfort.</span></h1>
            </div>
            <div className="text-(--brand-secondary) text-sm sm:text-base text-center lg:text-left">
              <p>Life is busy. Laundry shouldn't make it busier. Let Boldwash handle your laundry with expert care, effortless convenience, and freshness delivered right to your footstep</p>
            </div>
            <div className="flex items-start justify-start flex-col w-full lg:items-center lg:justify-start sm:gap-6 gap-2 lg:gap-5 lg:flex-row lg:pt-0 pt-4">
              {heroButton.map(({ icon: Icon, href, label}) => (
                <Button 
                key={href} 
                render={<a href={href} />}
                className={cn("lg:h-14 h-12 py-2  lg:py-4 px-2 lg:px-6 lg:text-lg sm:text-xl rounded-none border flex items-center justify-center w-full lg:w-auto ", href === "/services" ? "bg-white text-(--brand-primary) hover:bg-white border-white " : "bg-[#174D3A] hover:bg-[#174D3A] ")}>
                  <span>{label}</span>
                  { Icon ? <Icon /> : null}
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-y-3 w-full sm:flex sm:gap-10 sm:items-center sm:justify-center pt-4 lg:pt-0">
              {heroList.map((list, index) => (
                <div key={index} className="flex items-center justify-start gap-2">
                  <list.icon className="text-amber-500 size-4 lg:size-5" />
                  <span className="text-(--brand-secondary) text-sm md:text-md">{list.label}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="relative h-full lg:max-w-xl max-w-md sm:max-w-2xl border border-neutral-500 bg-transparent sm:px-8 lg:pt-8 px-2 pt-3">
            <CardHeader className="">
              <div className="flex items-center justify-between ">
                <div className="flex items-center justify-center gap-x-2">
                  <div className="flex items-center flex-col justify-center lg:w-12 lg:h-12 h-8 w-8  rounded-lg bg-[#4A5B40]">
                    <Star className="text-[#F4CB12] fill-[#F4CB12] size-4 lg:size-6" />
                  </div>
                  <div className="flex items-start justify-start flex-col">
                    <span className="text-white font-bold text-lg lg:text-2xl md:text-lg">4.69</span>
                    <span className="text-(--brand-secondary)">Google rating</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                    {Array.from ({ length: 5 }).map((_, index) => (
                      <Star 
                      key={index} 
                      className="size-4 lg:size-6 text-[#F4CB12] fill-[#F4CB12]" 
                       />
                    ))}
                  </div>
              </div>
            </CardHeader>
            <Separator className="bg-neutral-500" />
            <div className="grid grid-cols-2 space-4 lg:gap-x-12 lg:gap-y-6 gap-4 flex-1">
              {heroRightItems.map((item, index) => (
                <div key={index} className="flex item-start justify-start rounded-lg bg-(--brand-muted)/10 p-2 lg:p-4 flex-col">
                  <h3 className="font-semibold text-lg text-white lg:text-2xl">{item.label}</h3>
                  <span className="text-neutral-400">{item.desc}</span>
                </div>
              ))}
            </div>
            <div className="flex items-start w-full justify-start flex-col gap-y-2 lg:gap-y-4 bg-none">
              <Button
              className="flex items-center justify-center gap-y-2 bg-[#5BBF5E] hover:bg-[#5BBF5E] text-white font-medium w-full h-12 lg:h-12 text-md lg:text-lg hobg-[#5BBF5E]"
              render={<a href="#" />}>
                Book on Whatsapp
              </Button>
            </div>
          </Card>
        </div>
    </section>
  )
}
