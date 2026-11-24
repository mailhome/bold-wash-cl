import { cn } from 'cn'
import Navbar from '../layout/navbar'
import { Button } from '../ui/button'
import AboutHero from './about-hero'
import { aboutCtaButton, aboutfacility, contactCommitmentList, contactList } from './data'
import { ArrowRight, MapPin } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className='w-full'>
        <header className='bg-white width-wrapper'>
            <Navbar />
        </header>
        <AboutHero />
        <div className="w-full py-6 lg:py-16 bg-white">
            <div className="width-wrapper">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 lg:gap-x-20 gap-y-10">
                    <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-y-3 sm:gap-y-3">
                        <div className="text-center text-xs sm:text-lg sm:text-left uppercase text-yellow-800/70 font-medium">
                            <span>The Journey</span>
                        </div>
                          <div className="text-center sm:text-left text-xl lg:text-4xl text-black font-bold ">
                              <h1>From an Idea to<span className="italic text-(--brand-primary)"> Port Harcourt's Trusted Laundry</span></h1>
                          </div>
                          <div className="text-center sm:text-left text-neutral-800 text-sm lg:text-md">
                            <div className='space-y-6 lg:max-w-xl text-left'>
                              <p>
                                BulkWash was founded by a Port Harcourt native who experienced first-hand how frustrating it was to find a laundry service that was consistent, professional, and actually showed up on time.</p>

                                <p>We started with a single van, a WhatsApp number, and a promise: "Your clothes will come back cleaner, fresher, and better than you left them."</p>
                                <p>Today, we've grown into Port Harcourt's go-to laundry partner — serving thousands of homes, hotels, hospitals, restaurants, and businesses across the city, with a full suite of services from everyday wash & fold to specialist dry cleaning and rug care.</p>

                                <p>We are headquartered at 1 Capt. Adekunle Close, Udara Junction, Egbelu — right in the heart of the city.</p>
                              </div>
                          </div>
                    </div>
                     <div className="w-full h-full">
                    <img 
                    alt="Our Journey Image"
                    src="/hero-2.jpg"
                    className='w-full h-full rounded-lg' />
                </div>
                </div>
            </div>
        </div>
        <div className="my-5 sm:my-10 lg:my-16">
            <div className="width-wrapper">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-20 sm:gap-x-10 ">
                    {contactList.map(({ icon:Icon, label, desc, heading }) => (
                        <div key={label} className="bg-white p-4 sm:p-7 rounded-lg shadow-sm hover:shadow-lg">
                            <div className="lg:max-w-lg max-w-sm flex flex-col items-start justify-start gap-y-2 lg:gap-y-3 sm:gap-y-4">
                                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-(--brand-primary) flex items-center justify-center rounded-lg p-2 text-white">
                                    <Icon className='size-6' />
                                </div>
                                <div className="text-xs lg:text-md uppercase  text-yellow-800/70  ">
                                    <h3>{label}</h3>
                                </div>
                                <div className="text-md lg:text-xl text-black font-medium ">
                                    <h3>{heading}</h3>
                                </div>
                                <div className="text-xs lg:text-base text-muted-foreground">
                                    <p>{desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="my-5 sm:my-10 lg:my-16 bg-white">
            <div className="width-wrapper py-10">
                  <div className="flex flex-col items-center justify-center gap-y-2 sm:gap-4 w-full">
                      <div className="text-center text-sm sm:text-lg uppercase text-yellow-700/70 font-semibold">
                          <span>our commitment</span>
                      </div>
                      <div className="text-center text-2xl lg:text-5xl font-bold ">
                          <h1>What We Promise You</h1>
                      </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10  mt-5 lg:mt-10">
                    {contactCommitmentList.map(({ icon:Icon, desc, heading }) => (
                        <div key={heading} className="bg-neutral-200/50 p-2 sm:p-4 sm:py-8 py-6 rounded-sm shadow-sm hover:shadow-lg">
                            <div className="lg:max-w-xl max-w-sm mx-auto flex flex-col items-center justify-center gap-y-2 lg:gap-y-3 sm:gap-y-4">
                                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-(--brand-primary) flex items-center justify-center rounded-lg p-2 text-white">
                                    <Icon className='size-6' />
                                </div>

                                <div className="text-md lg:text-xl text-black font-medium text-center">
                                    <h3>{heading}</h3>
                                </div>
                                <div className="text-xs lg:text-base text-muted-foreground text-center">
                                    <p>{desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="">
            <div className="width-wrapper py-10 ">
                  <div className="flex flex-col items-center justify-center gap-y-2 sm:gap-4 w-full">
                      <div className="text-center text-sm sm:text-lg uppercase text-yellow-700/70 font-semibold">
                          <span>What Drives Us</span>
                      </div>
                      <div className="text-center text-2xl lg:text-5xl font-bold ">
                          <h1>Our Core Values
                          </h1>
                      </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10  mt-5 lg:mt-10">
                    {contactCommitmentList.map(({ icon:Icon, desc, heading }) => (
                        <div key={heading} className="bg-white p-2 sm:p-4 sm:py-8 py-6 rounded-sm shadow-sm hover:shadow-lg">
                            <div className="lg:max-w-xl max-w-sm mx-auto flex flex-col items-center justify-center gap-y-2 lg:gap-y-3 sm:gap-y-4">
                                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-[#D8F3DC] flex items-center justify-center rounded-lg p-2 text-(--brand-primary)">
                                    <Icon className='size-6' />
                                </div>

                                <div className="text-md lg:text-xl text-black font-medium text-center">
                                    <h3>{heading}</h3>
                                </div>
                                <div className="text-xs lg:text-base text-muted-foreground text-center">
                                    <p>{desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
              </div>
          </div>


           <div className="w-full py-6 lg:py-16 bg-white">
            <div className="width-wrapper">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 lg:gap-x-20 gap-y-10">
                    <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-y-3 sm:gap-y-5">
                        <div className="text-center text-xs sm:text-lg sm:text-left uppercase text-yellow-800/70 font-medium">
                            <span>Find us</span>
                        </div>
                          <div className="text-center sm:text-left text-xl lg:text-4xl text-black font-bold ">
                              <h1>Visit Our Facility</h1>
                          </div>
                          <div className="text-center sm:text-left text-neutral-800 text-sm lg:text-md">
                            <div className='space-y-6 lg:max-w-xl text-left'>
                              <p>We operate a fully-equipped laundry processing facility in Port Harcourt. You're welcome to drop off items in person or take advantage of our free pickup and delivery service.</p>
                          </div>
                        </div>
                        <div className="flex items-start justify-start gap-x-2">
                            <div className="text-black flex justify-center items-center">
                                <MapPin className='size-4 lg:size-4' />
                            </div>
                            <div className="flex flex-col items-start justify-start">
                                <p className='font-medium text-sm lg:text-md'>BoldWash Port Harcourt</p>
                                <p className='text-muted-foreground text-sm lg:text-md'>1 Capt. Adekunle Close, Udara Junction, Egbelu, Port Harcourt, Rivers State</p>
                            </div>
                            
                        </div>
                        <Button
                            render={ <a href="/contact" />}
                            className={cn("flex items-center justify text-md lg:text-md justify-center gap-x-2 px-6 py-2 w-full lg:w-auto h-12 rounded-full font-medium bg-[#24523D] border-3 border-[#24523D] text-white  hover:[#24523D")}>
                                <span>Get Directions</span>
                                <ArrowRight />
                            </Button> 
                </div>
                <div className="grid grid-cols-2 gap-4 lg:gap-8  w-full h-full">
                    {aboutfacility.map(({ label, desc}) => (
                        <div key={desc} className="bg-neutral-200/50 flex flex-col items-center justify-center gap-2 rounded-lg py-6">
                            <div className="flex items-center justify-center text-xl lg:text-3xl font-medium text-[#24523D]">
                                <span>{label}</span>
                            </div>
                            <div className="flex items-center justify-center text-sm lg:text-base text-muted-foreground">
                                <span>{desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
            
        </div>

          <div className="bg-[#24523D] w-full py-10 lg:py-20">
                      <div className="width-wrapper flex flex-col items-center justify-center gap-2 lg:gap-y-4">
                          <div className="max-w-sm sm:max-w-4xl lg:max-w-5xl mx-auto text-white text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-semibold text-center">
                              <h1>Experience BulkWash Today</h1>
                          </div>
                          <div className="max-w-xs sm:max-w-md lg:max-w-3xl mx-auto text-(--brand-secondary) text-sm sm:text-sm text-center">
                              <p>Join thousands of Port Harcourt residents and businesses who trust BulkWash for all their laundry needs.</p>
                          </div>
                          <div className="max-w-xs sm:max-w-md lg:max-w-3xl mx-auto flex md:items-center md:justify-center gap-x-5 lg:gap-x-5 md:flex-row mt-4 gap-y-5 flex-col w-full md:w-auto">
                              {aboutCtaButton.map(({ label, icon: Icon, href }) => (
                                  <Button
                                      key={href}
                                      render={<a href={href} />}
                                      className={cn("flex items-center justify text-md lg:text-md justify-center gap-x-2 px-6 py-2 h-14 rounded-full font-medium", href === "/booking" ? "bg-transparent border-3 border-(--brand-secondary) text-(--brand-secondary) hover:bg-transparent" : "bg-white text-(--brand-primary) hover:bg-white/80 ")}>
                                      {label}
                                    <Icon />
                                  </Button>
                              ))}
                          </div>
                      </div>
                  </div>
      </div>
  )
}
