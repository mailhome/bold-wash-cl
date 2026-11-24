import { ArrowRight, Badge, Clock, Diamond, Eye, Heart, Leaf, MapPin, Shield, Star } from "lucide-react";
import { FaPeopleGroup } from "react-icons/fa6";
import type { AboutCommitmentList, AboutCtaButtonProps, AboutFacility, AboutItemsProps } from "./types";

export const contactList: AboutItemsProps[] = [
    {
        label: "Our mission",
        heading: "Make Laundry Effortless for Every PH Household",
        desc: "To provide every home and business in Port Harcourt with accessible, reliable, and premium laundry services — delivered with consistency, care, and a smile.",
        icon: Diamond
    },
    {
        label: "Our Vision",
        heading: "Nigeria's Most Trusted Laundry Brand",
        desc: "To grow from Port Harcourt's favourite laundry service into Nigeria's most trusted laundry brand — known for quality, reliability, and exceptional customer experience.",
        icon: Eye
    }
]

export const contactCommitmentList: AboutCommitmentList[] = [
    { icon: Clock, heading: "Always on time", desc: "We respect your schedule. Pickups and deliveries arrive when we say they will."},
    { icon: Shield, heading: "Fully Insured", desc: "Every garment in our care is insured. Your clothes are safe with us — always."},
    { icon: Star, heading: "Satisfaction Guaranteed", desc: "Not happy? We re-clean for free or refund you. No questions, no hassle."},
    { icon: MapPin, heading: "Port Hacourt-based", desc: "We are local. We know PH, we serve PH, and we are proud to be part of this city."},
]

export const coreValues: AboutCommitmentList[] = [
     { icon: Heart, heading: "Customer First", desc: "Every decision we make starts with how it impacts our customers. Your satisfaction is our measure of success."},
     { icon: Badge, heading: "Excellence", desc: "We set the highest standards and never compromise on quality, from the detergents we use to the way we fold."},
     { icon: Leaf, heading: "Sustainability", desc: "Eco-friendly detergents and responsible water use across all our operations, because we care about Port Harcourt."},
     { icon: FaPeopleGroup, heading: "Community", desc: "EProudly Nigerian. We employ locally and are committed to giving back to the communities we serve."},
]

export const aboutCtaButton: AboutCtaButtonProps[] = [
    { icon: ArrowRight, label: "Book your first pickup", href: "/booking"}, 
    { icon: ArrowRight, label: "View all services", href: "/sevices"}, 
]

export const aboutfacility: AboutFacility[] = [
    { label: "2,890+", desc: "Happy Customers in PH"},
    { label: "26", desc: "Days a Week Service"},
    { label: "24hr", desc: "Express Turnaround"},
    { label: "99%", desc: "On-Time Delivery"},
]