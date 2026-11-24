import { useEffect, useState } from "react";
import Wrapper from "./wrapper";
import { testimonialsItems } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";


export default function WhatClientSay() {
  return (
    <div className="width-wrapper w-full relative overflow-hidden">
      <Wrapper 
      heading="What Clients Say" 
      title="Trusted Across Port Harcourt"
      mainContent={<WhatClientSayContent />}
       />
    </div>
  )
}

function WhatClientSayContent () {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonial = testimonialsItems[active];

  //Automatically rotate testimonials\
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
       setActive((current) => (current + 1) % testimonialsItems.length)
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const variant = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 50: -50
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -50 : 50,
    })
  }
  return (
    <div className="w-full">
      {/* Testimonial card */}
      <div
       onMouseEnter={() => setIsPaused(true)}
       onMouseLeave={() => setIsPaused(false)}
       className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-[28px] bg-white p-5 shadow-[0_15px_40px_rgba(0,0,0,0.05)] md:p-8 lg:p-10">
          <AnimatePresence mode="wait" custom={1}>
            <motion.div 
             key={active} 
             custom={1}
             variants={variant}
             initial="enter"
             animate="center"
             exit="exit"
             transition={{ duration: 0.45, ease: "easeInOut"}}
             className="flex flex-col gap-y-4">

              {/* Stars */}
              <div className="flex items-center justify-start gap-px">
                {Array.from({ length: 5}).map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-[#D5A443] text-[#D5A443]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif italic leading-[1.7] text-[#172D28] md:text-lg sm:text-md text-sm lg:text-xl">
                "{testimonial.quote}"
              </blockquote>

              {/* Customers */}
              <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex item-center justify-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E6EFEB] font-semibold text-[#14513F]">
                    {testimonial.initials}
                  </div>
                   <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>

                      <p className="mt-1 text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                </div>
                <span className="w-fit rounded-full bg-[#DDF5E8] px-4 py-2 text-sm font-medium text-[#16513F]">
                    {testimonial.category}
                  </span>
              </div>
             </motion.div>
          </AnimatePresence>
        </div>
       </div>

       {/* Pagination */}
       <div className="mt-4 flex items-center justify-center gap-2">
        {testimonialsItems.map((_, index) => (
          <button 
            key={index}
            onClick={() => setActive(active)}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={active === index}
            className={`h-2.5 rounded-full transition-all duration-300 ${active === index ? "w-8 bg-[#004D3B]" : "w-2.5 bg-gray-300 hover:bg-gray-400"}`} />
        ))}
       </div>
       <div className="w-full flex items-center mt-4 md:mt-8 justify-center hover:text-white">
        <Button 
        className="flex items-center justify-center gap-x-4 hover:bg-(--brand-primary) hover:text-white font-medium text-sm h- lg:text-md text-(--brand-primary) px-6 py-4 h-14 w-full md:w-auto bg-transparent border-2 border-(--brand-primary) rounded-full"
        render={<a href="/testimonials" />}>
          <span>Read all reviews</span>
          <ArrowRight />
        </Button>
       </div>
    </div>
  )
}
