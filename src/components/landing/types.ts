import type { LucideIcon } from "lucide-react";

export interface HeroButtonProps {
    label: string;
    href: string;
    icon?: LucideIcon | undefined;
}

export interface HeroListProps {
    label: string;
    icon:LucideIcon
}

export interface HeroRightItems  {
    label: string;
    desc: string;
}

export interface WhatWeOfferItems {
    icon: LucideIcon;
    label: string;
    desc: string;
    pricing: string;
    href: string;
    id: number;
}

export interface HowItWorksProps {
    icon: LucideIcon;
    label: string;
    desc: string;
    id: string;
}

export interface TestimonialsItemsProps {
    quote: string;
    name: string;
    role: string;
    category: string;
    initials: string;
}

export interface CtaListProps {
    icon: LucideIcon,
    label: string,
    desc: string;
}

export interface CtaButtonProps {
    label: string;
    href: string;
    icon: LucideIcon;
}