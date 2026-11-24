import Cta from "@/components/landing/cta"
import Hero from "@/components/landing/hero"
import SimpleProcess from "@/components/landing/simple-process"
import SiteStatistics from "@/components/landing/site-statistics"
import WhatClientSay from "@/components/landing/what-client-say"
import WhatWeOffer from "@/components/landing/what-we-offer"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="w-full">
     <Hero />
     <SiteStatistics />
     <WhatWeOffer />
     <SimpleProcess />
     <WhatClientSay />
     <Cta />
      
    </div>
  )
}
