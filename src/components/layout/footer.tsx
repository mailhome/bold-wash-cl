import { cn } from "cn";
import { footerDetailsList, footerLink, footerSocialLinks } from "./data";
import { Newsletter } from "./newsltter-component";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";

export default function Footer() {

  const handleSubscribe = async (email: string) => {
    const response = await fetch("api/newsletter", {
       method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Subscription failed");
    }
    
  };

  return (
    <footer className="w-full bg-[#0D0D0D]">
      <div className="width-wrapper pt-8 lg:pt-12">

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-20 gap-y-10 w-full border-b border-neutral-800">
          <div className="flex flex-col items-start justify-start gap-2 md:gap-2">
            <a href="/" className={('flex items-center  justify-center font-bold  text-white text-sm lg:text-lg')}>
              <span className=''>BOLDWASH</span>
            </a>
            <div className="text-(--brand-secondary) text-sm md:text-md">
              <p>Port Harcourt's trusted laundry and dry cleaning partner. Fresh. Clean. On Time.</p>
            </div>
            <div className="flex flex-col  items-start justify-start mt-3 gap-2 lg:gap-3">
              {footerDetailsList.map(( { icon:Icon, label, href }) => (
                <div key={href} className="flex items-start justify-start gap-2 ">
                  <div className="text-[#B8972A] ">
                    <Icon className="size-3" />
                  </div>
                  <div className="text-(--brand-secondary) hover:text-(--brand-accent) text-sm lg:text-md cursor-pointer">
                    <a href={href}>
                      {label}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-start gap-x-4 lg:gap-x-8 mt-4 cursor-pointer">
              {footerSocialLinks.map(({ icon: Icon, href }) => (
                <div key={href} className="text-(--brand-secondary) hover:text-(--brand-accent) text-sm lg:text-md w-10 h-10 lg:h-10 lg:w-10 rounded-full p-4 bg-white/5 flex justify-center items-center">
                  <a href={href}>
                    <Icon className="size-4 lg:size-4" />
                  </a>
                </div>
                
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-6 lg:gap-12 gap-y-6">
            {footerLink.map((link, index) => (
            <div key={index} className={cn("flex flex-col items-start justify-start gap-4 lg:gap-y-4", link.heading === "Legal" && "col-start-2 lg:-mt-45 -mt-34" )}>
                <div className={cn("text-white text-md lg:text-base font-medium",)}>
                  <h2>{link.heading}</h2>
                </div>
                {link.subFooterLinks.map(({label, href}) => (
                  <a key={href} href={href} className="text-(--brand-secondary) text-xs lg:text-xs hover:text-[#B8972A]">{label}</a>
                ))}
              </div>
            ))}
          </div>
          <Newsletter onSubscribe={handleSubscribe} />
        </div>
        <div className="flex items-center md:justify-between pt-4 pb-2 gap-3 flex-col sm:flex-row justify-center">
          <div className="text-neutral-500 text-xs lg:text-md text-center sm:text-left lg:max-w-lg max-w-xs">
            <p>&copy; {new Date().getFullYear()} Boldwash Services Nigeria Limited. All rights reserved</p>
          </div>
          <div className="text-neutral-500 text-xs lg:text-md">
            <p>Operating in Port Harcourt, Rivers State.</p>
          </div>
        </div>
        <Button type="button"
        className=" px-6 py-4 bg z-100 bg-emerald-800 hover:bg-green-800 text-white fixed bottom-8 left-1/2  -translate-x-1/2 rounded-full h-14">
        <a href="/booking" className="flex items-center justify-center gap-2 font-medium text-md lg:text-base" >
          <div className="w-4 h-4 lg:h-8 lg:w-8 flex items-center justify-center rounded-full bg-white/20 p-2">
            <Calendar className="size-5" />
          </div>
          <p>Book up a pickup now</p>
        </a>
      </Button>
      </div>
    </footer>
  )
}
