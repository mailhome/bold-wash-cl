import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface WrapperProps {
    heading?: string;
    title: string;
    desc?: string;
    sideTitle?: string;
    mainContent: ReactNode;
}


export default function Wrapper({ heading, title, desc, sideTitle, mainContent}: WrapperProps) {
  return (
    <div className="flex flex-col items-center w-full justify-center gap-y-3 sm:gap-y-3 lg:gap-y-5 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 30}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition ={{ duration: 0.7 }}
        className='flex flex-col items-center justify-center gap-y-2 sm:gap-y-2'>
        <div className="text-xs lg:text-md text-yellow-900 uppercase mt-2 sm:mt-4 lg:mt-6">
          <span>{heading}</span>
        </div>
        <div className="text-3xl sm:text-5xl  text-black text-center italic font-medium ">
          {sideTitle ? <h1>{title}<span className="text-emerald-800 pl-3">{sideTitle}</span></h1> : <h1>{title}</h1>}
        </div>
        <div className="text-muted-foreground sm:max-w-lg md:max-w-xl text-center max-w-xs text-sm sm:text-base">
          <p>{desc}</p>
        </div>
      </motion.div>
      <div className="w-full">
        {mainContent}
      </div>
    </div>
  )
}
