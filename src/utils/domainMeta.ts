import { formatCategoryName } from './textUtils.ts';

export interface DomainMeta {
    /** Human-readable label, e.g. "Artificial Intelligence" */
    label: string;
    /** Emoji shown in hero + badges */
    icon: string;
    /** One-line description used in the hero copy */
    blurb: string;
}

/**
 * Keys MUST exactly match the `domainEnum` values in src/content/config.ts.
 * If you add a value to domainEnum, add it here too (and vice versa).
 */
export const DOMAIN_META: Record<string, DomainMeta> = {
    technology: {
        label: 'Technology',
        icon: '💻',
        blurb: 'Indian-built technology across the stack.',
    },
    space: {
        label: 'Space',
        icon: '🚀',
        blurb: "India's reach for the stars — space tech and exploration.",
    },
    defense: {
        label: 'Defense',
        icon: '🛡️',
        blurb: 'Defense and strategic technology made in India.',
    },
    artificialIntelligence: {
        label: 'Artificial Intelligence',
        icon: '🤖',
        blurb: 'AI research, models, and products from India.',
    },
    health: { label: 'Health', icon: '🏥', blurb: 'Healthcare innovation improving Indian lives.' },
    mentalHealth: {
        label: 'Mental Health',
        icon: '🧠',
        blurb: 'Tools and voices supporting mental wellbeing.',
    },
    environment: {
        label: 'Environment',
        icon: '🌱',
        blurb: 'Protecting and restoring the environment.',
    },
    agriculture: {
        label: 'Agriculture',
        icon: '🌾',
        blurb: 'Feeding the nation — agri-tech and farming.',
    },
    cleanEnergy: {
        label: 'Clean Energy',
        icon: '⚡',
        blurb: 'Renewable and clean energy from India.',
    },
    education: {
        label: 'Education',
        icon: '🎓',
        blurb: 'Learning, teaching, and knowledge for all.',
    },
    research: {
        label: 'Research',
        icon: '🔬',
        blurb: 'Frontier research and scientific discovery.',
    },
    startups: { label: 'Startups', icon: '🚀', blurb: "India's startup ecosystem and founders." },
    finance: { label: 'Finance', icon: '💰', blurb: 'Fintech, payments, and financial services.' },
    manufacturing: {
        label: 'Manufacturing',
        icon: '🏭',
        blurb: 'Making things — Indian manufacturing.',
    },
    socialImpact: {
        label: 'Social Impact',
        icon: '🤝',
        blurb: 'Work that changes lives for the better.',
    },
    governance: {
        label: 'Governance',
        icon: '🏛️',
        blurb: 'Public systems, policy, and civic tech.',
    },
    ruralDevelopment: {
        label: 'Rural Development',
        icon: '🏘️',
        blurb: "Uplifting India's villages and rural economy.",
    },
    arts: { label: 'Arts', icon: '🎨', blurb: "India's creative and visual arts." },
    music: { label: 'Music', icon: '🎵', blurb: 'Indian sound — artists, composers, and labels.' },
    cinema: { label: 'Cinema', icon: '🎬', blurb: 'Film and storytelling made by Indians.' },
    literature: { label: 'Literature', icon: '📚', blurb: 'Indian writers, books, and words.' },
    heritage: { label: 'Heritage', icon: '🏯', blurb: "Celebrating India's culture and heritage." },
    sports: { label: 'Sports', icon: '🏅', blurb: 'Athletes and sporting excellence.' },
    fitness: { label: 'Fitness', icon: '💪', blurb: 'Movement, health, and physical wellbeing.' },
    infrastructure: {
        label: 'Infrastructure',
        icon: '🏗️',
        blurb: 'Roads, grids, and the backbone of India.',
    },
    transportation: {
        label: 'Transportation',
        icon: '🚆',
        blurb: 'Moving people and goods across India.',
    },
    digitalIndia: {
        label: 'Digital India',
        icon: '📲',
        blurb: 'The digital public infrastructure story.',
    },
    cybersecurity: { label: 'Cybersecurity', icon: '🔒', blurb: 'Defending the digital frontier.' },
    gaming: { label: 'Gaming', icon: '🎮', blurb: 'Games and studios made in India.' },
};

/** All valid domain keys, in enum order. */
export const ALL_DOMAINS = Object.keys(DOMAIN_META);

/** Safe lookup — falls back to a formatted label + generic icon for unknown keys. */
export function getDomainMeta(domain: string): DomainMeta {
    return (
        DOMAIN_META[domain] ?? {
            label: formatCategoryName(domain),
            icon: '🏷️',
            blurb: `Indian-made work in ${formatCategoryName(domain).toLowerCase()}.`,
        }
    );
}
