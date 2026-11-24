import { cn } from "cn";
import type { ReactNode } from "react";


interface headerWrapperProps {
    label: string;
    heading: string;
    desc?: string;
    headingString?: string;
    content?: ReactNode;
    contact?: boolean;
}

export default function HeaderWrapper({ label, heading, desc, headingString, content, contact}: headerWrapperProps) {
  return (
    <div className="w-full bg-[#326D51] py-8 lg:py-15">
        <div className="width-wrapper">
        <div className={cn("flex  items-center flex-col justify-center gap-y-2 lg:gap-y-3 sm:items-start sm:justify-start xl:max-w-2xl lg:max-w-2xl sm:max-w-sm max-w-xs", contact && "flex-col flex justify-center items-center mx-auto")}>
            <div className={cn("text-center text-sm sm:text-lg sm:text-left uppercase text-yellow-400 font-semibold", contact && "text-center w-full sm:text-center")}>
                <span>{label}</span>
            </div>
            <div className={cn("text-center sm:text-left text-2xl lg:text-6xl text-white font-bold ", contact && "text-center w-full sm:text-center")}>
                <h1>{heading}<span className="italic bg-amber-400">{headingString}</span></h1>
            </div>
            <div className={cn("text-center sm:text-left text-(--brand-secondary) text-sm lg:text-lg", contact && "text-center w-full sm:text-center text-sm lg:text-base")}>
                <p>{desc}</p>
            </div>
            <div className="">
                { content }
            </div>
        </div>
        </div>
    </div>
  )
}
