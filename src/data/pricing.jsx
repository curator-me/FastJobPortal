import { Zap, Star, ShieldCheck } from 'lucide-react';

export const plans = [
    {
        name: "Free Tier",
        price: "0",
        period: "forever",
        description: "Perfect for exploring our platform and finding your first opportunities.",
        features: [
            "Up to 5 job applications per month",
            "Basic profile visibility",
            "Public company insights",
            "Standard support"
        ],
        icon: <Zap className="plan-icon" />,
        buttonText: "Start for Free",
        highlight: false
    },
    {
        name: "Monthly",
        price: "29",
        period: "per month",
        description: "For active job seekers who want an edge in their search.",
        features: [
            "Unlimited job applications",
            "Priority profile placement",
            "Detailed salary analytics",
            "Direct messaging to recruiters",
            "AI resume optimizer (10/mo)"
        ],
        icon: <Star className="plan-icon" />,
        buttonText: "Get Started",
        highlight: true
    },
    {
        name: "Yearly",
        price: "249",
        period: "per year",
        description: "Best value for long-term career growth and networking.",
        features: [
            "Everything in Monthly",
            "Save 30% compared to monthly",
            "Unlimited AI resume optimization",
            "Personal career coach consultation",
            "Exclusive networking events"
        ],
        icon: <ShieldCheck className="plan-icon" />,
        buttonText: "Go Annual",
        highlight: false
    },
    {
        name: "Lifetime",
        price: "599",
        period: "one-time",
        description: "A permanent investment in your professional future.",
        features: [
            "Lifetime premium access",
            "Early access to new features",
            "VIP support channel",
            "Digital 'Founding Member' badge",
            "Lifetime career tools updates"
        ],
        icon: <Zap size={32} className="plan-icon-gold" />,
        buttonText: "Buy Lifetime",
        highlight: false
    }
];