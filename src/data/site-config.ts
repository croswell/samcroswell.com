export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Sam Croswell',
    subtitle: 'Web & Product designer',
    description: 'Sam is a designer, surfer, and collage artist living in Southern California. He currently works at Synadia as the lead designer. Previously, he served as the founding designer at Kajabi. Sam specializes in web, product, and systems design for early to growth stage companies.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/samcroswell'
        },
        {
            text: 'Twitter',
            href: 'https://twitter.com/samcroswell'
        }
    ],
    hero: {
        title: 'Web & Product designer',
        text: "I’m a designer, surfer, and <a href='https://instagram.com/samcroswell'>collage artist</a> living in Southern California. Currently I work at <a href='https://synadia.com'>Synadia</a> as the lead designer. Previously, I served as the founding designer at <a href='https://kajabi.com'>Kajabi</a>. I am a design generalist, but I specialize in web and product design for early to growth stage companies. Follow me on <a href='https://twitter.com/samcroswell'>Twitter</a> to see more in-progress work. If you think I would be a good fit for your project or team, let's chat.",
        actions: [
            {
                text: 'Get in Touch',
                href: 'mailto:jscroswell@gmail.com'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 999,
    projectsPerPage: 999
};

export default siteConfig;
