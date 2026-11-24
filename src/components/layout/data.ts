import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import type { FooterContactDetailsProps, FooterLinksProps, FooterSocialsProps, NavbarLinkItems } from "./types";

export const navbarLinkItems: NavbarLinkItems[] = [
    { heading: 'Home', href: "/" },
    { heading: 'Services', serviceLink: [
        {label: "Wash & Fold (Iron)", href: "/services/wash-fold"},
        {label: "Ironing", href: "/services/ironing"},
        {label: "Dry Cleaning", href: "/services/dry-cleaning"},
        {label: "Bedding Cleaning", href: "/services/bedding-cleaning"},
        {label: "Rug Cleaning", href: "/services/rug-cleaning"},
        {label: "Curtains & Blinds", href: "/services/curtains-blinds"},
        {label: "Couches", href: "/services/couches"},
        {label: "Shoes & Canvas", href: "/services/shoes-canvas"},
        {label: "Bulk / Commercial", href: "/services/bulk-commercial"},
        {label: "Express 24hrs", href: "/services/express-24hrs"},
        {label: "Pick & Delivery", href: "/pick-delivery"},
    ] },
    { heading: 'About', href: "/about" },
    { heading: 'Careers', href: "/careers" },
    { heading: 'Testimonial', href: "/testimonial" },
    { heading: 'Contact', href: "/contact" },
]

export const footerDetailsList: FooterContactDetailsProps[] = [
    { 
        icon: MapPin, 
        label: "1 Capt. Adekunle Close, Udara Junction, Egbelu, Port Harcourt"
    },
    { 
        icon: Phone, 
        label: "+234 703 937 0222", 
        href: "tel:+2347039370222"
    },
    { 
        icon: Mail, 
        label: "hello@boldwashng.com",
        href: "mailto:hello@boldwashng.com"
    }
]

export const footerSocialLinks: FooterSocialsProps[] = [
    { icon: FaInstagram, href: "https://www.instagram.com/bulkwash_ng?igsh=ZTk1MTJ0dTFxeGVv&utm_source=qr"},
    { icon: FaFacebookF, href: "https://www.facebook.com/share/1Lt7rMwqcR/?mibextid=wwXIfr"},
    { icon: FaTiktok, href: "https://www.tiktok.com/@bulkwash?_r=1&_t=ZS-96sQUIWtyVD"},
]

export const footerLink: FooterLinksProps[] = [
    {
        heading: "Our Services",
        subFooterLinks: [
            {label: "Wash & Fold (Iron)", href: "/services/wash-fold"},
        {label: "Ironing", href: "/services/ironing"},
        {label: "Dry Cleaning", href: "/services/dry-cleaning"},
        {label: "Bedding Cleaning", href: "/services/bedding-cleaning"},
        {label: "Rug Cleaning", href: "/services/rug-cleaning"},
        {label: "Curtains & Blinds", href: "/services/curtains-blinds"},
        {label: "Couches", href: "/services/couches"},
        {label: "Shoes & Canvas", href: "/services/shoes-canvas"},
        {label: "Bulk / Commercial", href: "/services/bulk-commercial"},
        {label: "Express 24hrs", href: "/services/express-24hrs"},
        {label: "Pick & Delivery", href: "/pick-delivery"},
        ]
    },

    {
        heading: "Company", 
        subFooterLinks: [
            { label: "About Us", href: "/about-us"},
            { label: "Careers", href: "/careers"},
            { label: "Testimonials", href: "/testimonials"},
            { label: "FAQ", href: "/faq"},
            { label: "Contact", href: "/contact"},
            { label: "Book a service", href: "/booking"},
        ]
    },

    {
        heading: "Legal",
        subFooterLinks: [
            { label: "Privacy Policy", href: "/privacy-policy"},
            { label: "Terms of Service", href: "/terms"},

        ]
    }
]