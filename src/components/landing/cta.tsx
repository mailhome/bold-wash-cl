import { cn } from 'cn'
import { Button } from '../ui/button'
import { ctaButton, CtaList } from './data'
import { ArrowRight, Phone } from 'lucide-react'

export default function Cta() {
  return (
    <div className='mt-20 sm:pt-4 pt-8 border-t '>
      <div className="width-wrapper bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-3 py-6 md:py-12 lg:px-20 gap-y-10">
          {CtaList.map(({ icon:Icon, label, desc}) => (
            <div key={label} className="flex items-start gap-x-4 lg:gap-4 justify-start">
              <div className="p-4 lg:p-4 bg-[#D8F3DC] rounded-md text-(--brand-primary)">
                <Icon className='size-8 lg:size-8' />
              </div>
              <div className="flex flex-col items-start justify-start gap-2 max-w-sxs">
                <h2 className='text-black text-lg sm:text-xl font-medium'>{label}</h2>
                <p className='text-muted-foreground text-sm md:text-md lg:pr-4'>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#3B7F5F] w-full py-10 lg:py-20">
        <div className="width-wrapper flex flex-col items-center justify-center gap-2 lg:gap-y-4">
          <div className="max-w-sm sm:max-w-4xl lg:max-w-5xl mx-auto text-white text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-semibold text-center">
            <h1>Ready for Fresh, Clean Clothes?</h1>
          </div>
          <div className="max-w-xs sm:max-w-md lg:max-w-3xl mx-auto text-(--brand-secondary) text-sm sm:text-sm text-center">
            <p>Schedule your first pickup today and experience why thousands in Port Harcourt trust BoldWash.</p>
          </div>
          <div className="max-w-xs sm:max-w-md lg:max-w-3xl mx-auto flex md:items-center md:justify-center gap-x-5 lg:gap-x-5 md:flex-row mt-4 gap-y-5 flex-col w-full md:w-auto">
            {ctaButton.map(({ label, icon: Icon, href }) => (
              <Button 
              key={href} 
              render={<a href={href} />}
              className={cn("flex items-center justify text-md lg:text-md justify-center gap-x-2 px-6 py-2 h-14 rounded-full font-medium", href==="/booking" ? "bg-transparent border-3 border-(--brand-secondary) text-(--brand-secondary) hover:bg-transparent" : "bg-white text-(--brand-primary) hover:bg-white/80 ")}>
                { Icon === Phone && <Icon /> }
                { label}
                { Icon === ArrowRight && <Icon /> }
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
