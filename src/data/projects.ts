import type { ImageMetadata } from 'astro';
import travelHome from '../assets/images/raa-travel-home.png';
import holiday from '../assets/images/raa-holiday.png';
import hotel from '../assets/images/raa-mobile-hotel.png';
import sprintAffinity from '../assets/images/travel-sprint-affinity.jpg';
import sprintStory from '../assets/images/travel-sprint-storyboards.jpg';
import midWires from '../assets/images/travel-sd-wireframes.png';
import qtb from '../assets/images/raa-qtb-start.png';
import account from '../assets/images/my-account.png';
import payments from '../assets/images/payment-portal.png';
import journey from '../assets/images/journey-map-1.png';
import system from '../assets/images/design-system-1.png';
import qtbSprint from '../assets/images/qtb-sprint-IMG_0306.jpg';
import login from '../assets/images/log-in.png';
import idm from '../assets/images/raa-idm-figma.png';
import f1a from '../assets/images/freelance-1a.png';
import f1b from '../assets/images/freelance-1b.png';
import f1c from '../assets/images/freelance-1c.png';
import f1d from '../assets/images/freelance-1d.png';
import f2a from '../assets/images/freelance-2a.png';
import f2b from '../assets/images/freelance-2b.png';
import f2c from '../assets/images/freelance-2c.png';
import f3a from '../assets/images/freelance-3a.png';
import f3b from '../assets/images/freelance-3b.png';
import f4a from '../assets/images/freelance-4a.png';

export type Shot = { src: ImageMetadata; alt: string; caption?: string };
export type Section = { heading: string; paragraphs: string[]; shots?: Shot[] };
export type Project = {
  slug: string; label: string; title: string; summary: string;
  role: string; team: string; focus: string;
  hero: ImageMetadata; heroAlt: string; intro: string[];
  sections: Section[]; outcomes?: string[]; bigShots?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'travel', label: 'Case study 01', title: 'RAA Travel: online search and book, and the mid-office booking platform',
    summary: 'From nothing to a live search and book platform taking sales, and a booking platform for travel agents designed with the people who use it.',
    role: 'Lead designer', team: 'Product, engineering, marketing, the business, the UK vendor Vibe, service design', focus: 'Information architecture, research, design sprint, service design, iteration',
    hero: travelHome, heroAlt: 'RAA Travel homepage',
    intro: ['RAA Travel is RAA\u2019s online search and book platform, alongside a mid-office booking platform used by travel agents. I was lead designer from the start, working with Vibe, a UK vendor, to build the platform, and with stakeholders across the business, marketing and engineering.'],
    sections: [
      { heading: 'Building the platform', paragraphs: ['We started with online search and book for flights and accommodation, then added car hire and holiday packages. I designed the information architecture and the booking journeys with the vendor\u2019s team, alongside product, marketing and engineering stakeholders, working within the technical constraints of the platform.'], shots: [{ src: holiday, alt: 'Holiday search' }, { src: hotel, alt: 'Mobile hotel booking' }] },
      { heading: 'Understanding members', paragraphs: ['I worked with a research vendor and ran my own in-person usability research with members. A design sprint with travel stakeholders, marketing, the business and engineers aligned the team on what to build and how members would search, compare and book.'], shots: [{ src: sprintAffinity, alt: 'Design sprint affinity mapping' }, { src: sprintStory, alt: 'Design sprint storyboards' }] },
      { heading: 'The mid-office booking platform', paragraphs: ['For the platform travel agents use, I worked on service design and ran workshops, ideation and sketching sessions with stakeholders, travel agents, service designers and other designers. Sketches became wireframes, iterated in Miro and Figma and tested along the way.'], shots: [{ src: midWires, alt: 'Mid-office wireframes' }] },
      { heading: 'Improving from insights', paragraphs: ['After launch, the team kept improving search and book from member insights and metrics, with changes prioritised and delivered through the product squad.'] },
    ],
    outcomes: ['Online search and book live and taking sales, covering flights, accommodation, car hire and holiday packages', 'Continuous improvement from member insights and metrics, delivered through the product squad', 'Mid-office design shaped with travel agents, service design and stakeholders through workshops and iterations'],
  },
  {
    slug: 'member-products', label: 'Case study 02', title: 'Member products: quote to buy, My Account, claims and renewals',
    summary: 'Four products built on one design system and one journey management process, handed to product squads and improved over years.',
    role: 'Senior UX and product design lead, then UX manager', team: 'Product managers, engineers, design agencies, product squads', focus: 'Design system, usability testing, journey management, design sprint',
    hero: qtb, heroAlt: 'Quote to buy start screen',
    intro: ['These products started with designs built alongside design agencies. Over the years they were improved iteratively, then moved into their own product squads, each led by product delivery. I moved across those squads at different points as senior UX and product design lead, and later as manager of the UX team.'],
    sections: [
      { heading: 'One design system, one process', paragraphs: ['All of these products use the same design system, the same usability testing process and the same journey management platform. I introduced journey management later in my time as a designer, before moving into management.'], shots: [{ src: system, alt: 'Design system documentation' }, { src: journey, alt: 'Journey map' }] },
      { heading: 'Quote to buy', paragraphs: ['I facilitated the five-day design sprint for quote to buy, working with product, engineering and business stakeholders to ideate, prototype and test.'], shots: [{ src: qtbSprint, alt: 'Quote to buy design sprint' }] },
      { heading: 'My Account, claims and renewals', paragraphs: ['Across My Account, claims and renewals, designs were tested with members in person, remotely and unmoderated, reviewed for accessibility, and handed to squads through the design system.'], shots: [{ src: account, alt: 'My Account' }, { src: payments, alt: 'Payment portal' }] },
      { heading: 'Moving into management', paragraphs: ['As manager, the work moved to a higher level: pushing for specific tools and processes, and presenting business cases to the architecture review board, while still designing.'] },
    ],
    outcomes: ['Multiple product squads iteratively improving these products from insights and metrics', 'One design system and one journey management process shared across squads', 'Tools and processes endorsed through the architecture review board'],
  },
  {
    slug: 'identity-management', label: 'Case study 03', title: 'Identity management: login and registration',
    summary: 'Improving the front door to every RAA digital product, including the problems with member matching, within the constraints of Auth0.',
    role: 'Senior UX and product design lead', team: 'Engineers, product, identity specialists', focus: 'Login and registration, member matching, Auth0, user testing',
    hero: login, heroAlt: 'Login screen',
    intro: ['Login and registration are the front door to every RAA digital product. I worked on iterations to the existing process, including the problems with member matching, and on bringing the design through Auth0 with the engineers.'],
    sections: [
      { heading: 'The problem', paragraphs: ['The existing login and registration flows had friction, particularly where a member\u2019s details did not match an existing record. We mapped where members got stuck before changing anything.'], shots: [{ src: idm, alt: 'Identity management flows' }] },
      { heading: 'Designing within Auth0', paragraphs: ['Working through Auth0 meant designing with its technical constraints, so I worked closely with engineers on what was feasible and iterated the designs against it.'] },
      { heading: 'Testing with members', paragraphs: ['The redesigned flows were tested with members before build, so changes were based on what people did and not on assumptions.'] },
    ],
    outcomes: ['Login and registration journeys redesigned within Auth0 and its technical constraints', 'Flows tested with members before build'],
  },
  {
    slug: 'freelance', label: 'Freelance', title: 'Freelance design and development',
    summary: 'Websites designed, built and run for clients, from Shopify and WordPress e-commerce to small business sites.',
    role: 'Designer, developer and project manager', team: 'Clients and their stakeholders', focus: 'Design, front-end development, e-commerce, training',
    hero: f1a, heroAlt: 'Freelance website project', bigShots: true,
    intro: ['I have run my own design and development practice alongside my full-time roles, managing every part of the work myself: engaging stakeholders, running workshops, designing and coding the sites, iterating with the client, and training them to manage the result.'],
    sections: [
      { heading: 'Selected work', paragraphs: ['Pali Footwear, a Shopify e-commerce website. Chair covers, a WordPress e-commerce site. Bass Coast Podiatry and a recent yoga website, both on WordPress. And many more.'], shots: [f1b, f1c, f1d, f2a, f2b, f2c, f3a, f3b, f4a].map((src, i) => ({ src, alt: 'Freelance website ' + (i + 1) })) },
    ],
  },
];
