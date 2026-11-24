import { ArrowRight, BedSingle, Blinds, CircleCheckBig, Clock, Gem, House, Phone, Shield, Shirt, ShoppingBasket, SportShoe, Star, Truck } from "lucide-react";
import type { CtaButtonProps, CtaListProps, HeroButtonProps, HeroListProps, HeroRightItems, HowItWorksProps, TestimonialsItemsProps, WhatWeOfferItems } from "./types";

export const heroButton: HeroButtonProps[] = [
    { label: "Book Your Pickup",  href: "/booking"},
    { label: "View Services", icon: ArrowRight,  href: "/services"}
]

export const heroList: HeroListProps[] = [
    { icon: Shield, label: "Insured & Certified" },
    { icon: Clock, label: "Same-Day Available" },
    { icon: Star, label: "5-Star rated" },
]

export const heroRightItems: HeroRightItems[] = [
    { label: "2.890+", desc: "Happy Customers"},
    { label: "99%", desc: "On-Time Delivery"},
    { label: "24hrs", desc: "Turnaround"},
    { label: "PH", desc: "& Expanding"},
]

export const whatWeOfferItems: WhatWeOfferItems[] = [
    { 
        icon: Shirt, 
        label: "Wash & Fold", 
        desc: "Premium wash, dry, and fold for everyday clothes. Sorted, washed and neatly packaged.",
        pricing: `From ₦2500/kg`, 
        href: "/services/wash-fold",
        id: 1,
    }, 
    { 
        icon: Shirt, 
        label: "Dry Cleaning", 
        desc: "Expert dry cleaning for suits, gowns, agbada, and all delicate garments.",
        pricing: `From ₦1500/kg`, 
        href: "/services/dry-cleaning",
        id: 2,
    }, 
    { 
        icon: BedSingle, 
        label: "Bedding & Linen", 
        desc: "Deep cleaning for duvets, pillows, bed sheets, and all bedroom linens.",
        pricing: `From ₦3000/kg`,
        href: "/services/bedding-cleaning",
        id: 3,
    }, 
    { 
        icon: ShoppingBasket, 
        label: "Bulk & Commercial", 
        desc: "High-volume laundry solutions for hotels, restaurants, and businesses.",
        pricing: `Custom Pricing`, 
        href: "/services/bulk-commercial",
        id: 4
    }, 
    { 
        icon: Gem, 
        label: "Ironing", 
        desc: "Crisp, wrinkle-free clothes for every occasion. Steam-pressed to perfection.",
        pricing: `₦500/item`,
        href: "/services/ironing",
        id: 5
    }, 
    { 
        icon: Blinds, 
        label: "Curtains & Blinds", 
        desc: "Freshen up your living space with clean curtains and window blinds.",
        pricing: `From ₦1500/panel`,
        href: "/services/curtains-blinds",
        id: 6
    }, 
    { 
        icon: House, 
        label: "Rug Cleaning", 
        desc: "Deep clean and odour removal for centre rugs, persian rugs, and area rugs.",
        pricing: `From ₦2000`, 
        href: "/services/rug-cleaning", 
        id: 7
    }, 
    { 
        icon: SportShoe, 
        label: "Shoes & Canvas", 
        desc: "Expert cleaning for all footwear types — sneakers, leather, heels, and more.",
        pricing: `From ₦1500/pair`,
        href: "/services/shoes-canvas", 
        id: 8
    }, 

]

export const howItWorks: HowItWorksProps[] = [
    { icon: CircleCheckBig, label: "Book Your Pickup", desc: "Choose your service, select a time, and enter your Port Harcourt address in minutes.", id: "01"},
    { icon: Truck, label: "We Collect", desc: "Our uniformed driver arrives at your doorstep within the agreed window, on time", id: "02"},
    { icon: Clock, label: "Fresh Delivery", desc: "Cleaned, folded, and delivered back to you — fresh and right on schedule.", id: "03"}
]

export const testimonialsItems: TestimonialsItemsProps[] = [
  {
    quote:
      "Our hotel has been using Boldwash for commercial laundry for 18 months. Their consistency and professionalism is unmatched. Guest satisfaction scores for linen quality have increased significantly.",
    name: "Emeka Nwosu",
    role: "Hotel Manager, Port Harcourt",
    category: "Commercial Bulk",
    initials: "EN",
  },
  {
    quote:
      "Boldwash has completely transformed the way we handle our laundry. Pickup is reliable, the clothes always come back fresh, and their service is exceptional.",
    name: "Amaka Johnson",
    role: "Business Owner, Port Harcourt",
    category: "Premium Laundry",
    initials: "AJ",
  },
  {
    quote:
      "I love how easy it is to schedule a pickup. Their team is professional, fast and very careful with my clothes. I highly recommend them.",
    name: "David Okoro",
    role: "Residential Customer",
    category: "Home Laundry",
    initials: "DO",
  },
];

export const CtaList: CtaListProps[] = [
    { 
        icon: Shield, 
        label: "Fully Insured", 
        desc: "All garments are insured while in our care. Your clothes are protected end-to-end."
    },
    {
        icon: CircleCheckBig,
        label: "Quality Guaranteed",
        desc: "Not satisfied? We will re-clean at no charge or give you a full refund. No questions asked."
     },
    {
        icon: Star,
        label: "Aba's Favourite",
        desc: "Trusted by thousands of households and businesses across Port Harcourt and Rivers State."
     }
]

export const ctaButton: CtaButtonProps[] = [
    { icon: Phone, label: "Book on Whatsapp", href: "#"}, 
    { icon: ArrowRight, label: "Book online", href: "/booking"}, 
]
