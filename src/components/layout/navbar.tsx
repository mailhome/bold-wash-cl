import useOnScrolled from '@/lib/onScrolled'
import { useLocation } from '@tanstack/react-router'
import { cn } from 'cn'
import { ChevronDown, ChevronUp, Menu } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { navbarLinkItems } from './data'
import Logo from './logo'

export default function Navbar() {
    const onScrolled = useOnScrolled()
    const pathname = useLocation({
        select: (location) => location.pathname
    });
    const [openMobileMenu, setOpenMobileMenu] = useState<null | string>(null);

    const subMenuMobile = (title: string) => {
        setOpenMobileMenu((current) => current === title ? null : title)
    }

    return (
        <nav className='flex item-center ml-2 sm:ml-0 justify-between lg:px-4 py-2 px-4 lg:py-0'>
            <Logo />
            <div className="hidden lg:flex items-center justify-center gap-x-8 xl:gap-x-10">
                {navbarLinkItems.map((item, index) => (
                    <div key={index} className={cn("text-md font-medium text-white", onScrolled && " text-(--brand-primary)", pathname !== "/" && "text-neutral-700")}>
                        {item.href ?
                            <a href={item.href} className={cn("hover:underline underline-offset-4 decoration-[#F29B70] decoration-2", pathname === item.href && "underline underline-offset-4 decoration-[#F29B70] decoration-2")}>{item.heading}</a> :
                            <HoverCard>
                                <HoverCardTrigger className="flex items-center justify-center gap-x-2 hover:hover:underline underline-offset-4 decoration-[#F29B70] decoration-2 cursor-pointer">
                                    {item.heading}
                                </HoverCardTrigger>
                                <HoverCardContent className="w-60 h-full rounde-md shadow-sm">
                                    <div className="flex items-start justify-start gap-y-2 w-full flex-col">
                                        <h1 className='text-sm text-medium lg:text-md border-b w-full flex items-center justify-start text-(--brand-primary) font-semibold uppercase py-2 px-2 border-(--brand-muted) tracking-widest'>All Services</h1>
                                        <div className="flex items-start justify-start gap-y-2 flex-col w-full">
                                            {item.serviceLink?.map((serviceItem, serviceIndex) => (
                                                <a
                                                    key={serviceIndex}
                                                    href={serviceItem.href}
                                                    className='py-1 hover:bg-(--brand-muted) px-2 text-sm lg:text-md w-full'>
                                                    {serviceItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>}
                    </div>
                ))}
            </div>
            <div className="hidden lg:flex items-center justify-center">
                <Button
                    variant="default"
                    render={<a href="/booking" />}
                    className="bg-(--brand-primary) hover:bg-(--brand-foreground) rounded-xl text-md lg:text-sm h-9 px-4 text-background">
                    Book Now
                </Button>
            </div>

            <div className="lg:hidden flex items-center justify-center width-wrapper">
                <Sheet>
                    <SheetTrigger>
                        <Menu className='text-yellow-500 hover:text-yellow-500' />
                    </SheetTrigger>
                    <SheetContent className="w-full h-screen overflow-y-visible ">
                        <SheetHeader className="w-full width-wrapper">
                            <SheetTitle>
                                <Logo />
                            </SheetTitle>
                        </SheetHeader>
                        <div className='flex items-start justify-start  mt-5 flex-col w-full -ml-4 width-wrapper'>
                            {navbarLinkItems.map((item, index) => (
                                <div key={index} className="w-full py-2 overflow overflow-auto">
                                    {item.href ? (
                                        <a href={item.href} className={cn(" flex items-center  justify-between w-full hover:bg-(--brand-secondary) hover:text-black  p-2 ", pathname === item.href && "")}>
                                            {item.heading}
                                        </a>
                                    ) : (
                                        <div className="w-full">
                                            <div onClick={() => subMenuMobile(item.heading)} className="flex items-center  justify-between w-full p-2 hover:bg-(--brand-secondary) hover:text-black">
                                                <span>{item.heading}</span>
                                                {openMobileMenu ? <ChevronUp /> : <ChevronDown />}
                                            </div>
                                            {openMobileMenu === item.heading && (
                                                <div className="width-wrapper flex flex-col items-start justify-start pl-6 w-full">
                                                    {item.serviceLink?.map((link, index) => (
                                                        <a key={index} href={link.href} className='p-2 text-xs  cursor-pointer w-full hover:bg-(--brand-secondary)'>
                                                            {link.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <SheetFooter>
                            <Button
                                variant="default"
                                render={<a href="/booking" />}
                                className="bg-(--brand-primary) hover:bg-(--brand-foreground) rounded-md text:xl lg:text-sm h-9 px-4 text-background">
                                Book Now
                            </Button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>

  )
}
