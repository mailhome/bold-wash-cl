import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons"

export interface NavbarLinkItems {
    heading: string
    href?: string;
    serviceLink?: ServiceLink[];
}

interface ServiceLink {
    label: string;
    href: string;
}

export interface FooterContactDetailsProps {
    label: string;
    href?: string;
    icon: LucideIcon;
}

export interface FooterSocialsProps {
    icon: IconType;
    href: string;
}  

export interface FooterLinksProps {
    heading: string;
    subFooterLinks: SubFooterLinkProps[]
}

interface SubFooterLinkProps {
    label: string;
    href: string;
}