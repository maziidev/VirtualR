import { ReactNode } from "react";

export type NavItem = {
    label: string;
    href: string
}

export type Testimonial = {
    user: string;
    company: string;
    image: string;
    text: string
}


export type Feature = {
    icon: ReactNode;
    text: string;
    description: string
}

export type ChecklistItem = {
    title: string;
    description: string
}

export type PricingOption = {
    title: string;
    price: string;
    features: string[]
}

export type FooterLink = {
    href: string;
    text: string;
}