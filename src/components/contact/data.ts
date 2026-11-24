import { Mail, MapPin, Phone } from "lucide-react";
import type { ContactInfoProps } from "./types";

export const contactInfo: ContactInfoProps[] = [
    {
        icon: MapPin,
        label: "Our location - Port harcourt",
        desc: "1 Capt. Adekunle Close, Udara Junction, Egbelu, Port Harcourt, Rivers State",
        href: "https://maps.google.com/?q=1+Capt.+Adekunle+Close,+Udara+Junction,+Egbelu,+Port+Harcourt"
    },
    {
        icon: Phone,
        label: "Call or whatsapp",
        desc: "+234 703 937 0229",
        href: "tel:+2347039370229"
    },
    {
        icon: Mail,
        label: "Email us",
        desc: "hello@boldwashng.com",
        href: "mailto:hello@boldwashng.com"
    },
]