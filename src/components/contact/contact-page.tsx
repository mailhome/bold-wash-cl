import Navbar from '../layout/navbar'
import ContactForm from './contact-form'
import ContactHero from './contact-hero'
import { contactInfo } from './data'

export default function ContactPage() {
  return (
    <div>
        <header className='bg-white width-wrapper'>
            <Navbar />
        </header>
        <ContactHero />
        <div className="width-wrapper my-10 lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col items-start justify-start gap-y-6 lg:gap-y-10">
              {contactInfo.map(({ icon:Icon, label, desc, href}) => (
                <div key={href} className="flex items-start justify-start gap-x-2 lg:gap-x-4">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-(--brand-primary) flex items-center justify-center lg:rounded-lg p-2 text-white">
                      <Icon className='size-5' />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-px lg:gap-1">
                    <div className="uppercase text-sm sm:text-md text-muted-foreground">
                      <span>{label}</span>
                    </div>
                    <a href={href} className="text-sm sm:text-md text-muted-foreground">
                      <span>{desc}</span>
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex flex-col items-start justify-start gap-y-4 mt-4 w-full">
                <div className="text-base lg:text-xl font-semibold">
                  <h3>Business Hours</h3>
                </div>
                <div className="flex items-start justify-start flex-col gap-y-2 lg:gap-y-4 w-full">
                  <div className="flex justify-between items-center text-muted-foreground text-sm border-b lg:text-md font-medium w-full pb-2
                  ">
                    <p>Monday – Saturday</p>
                    <p>8:00 AM – 8:00 PM</p>
                  </div>
                  <div className="flex justify-between items-center text-muted-foreground text-sm border-b lg:text-md font-medium w-full pb-2
                  ">
                    <p>Sunday</p>
                    <p className='text-black'>Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
          
        </div>
    </div>
  )
}
