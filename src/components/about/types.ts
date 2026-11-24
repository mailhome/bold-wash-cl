import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export interface AboutItemsProps {
    icon: LucideIcon;
    label: string;
    desc: string;
    heading: string;
}

export interface AboutCommitmentList {
    icon: LucideIcon | IconType;
    heading: string;
    desc: string;
}

export interface AboutCtaButtonProps {
    label: string;
    href: string;
    icon: LucideIcon;
}

export interface AboutFacility {
    label: string;
    desc: string;
}