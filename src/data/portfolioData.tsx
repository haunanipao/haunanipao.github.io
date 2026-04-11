// ============================================
// portfolioData.tsx
// Content for each main section of the App page
// ============================================
import ImageHPao from '../assets/haunanipao.png';
import ImageMyArt from '../assets/rangitoto2026.png';
import {
  Calendar,  Github,  Linkedin,  Link2,  Menu,  X,  Code,  Users,  Lightbulb,  Palette,  Target,  Compass,  MessageCircle,  Search,  ArrowRight,  ArrowUpRight,  Sparkles,} from "lucide-react";

export const iconMap: Record<string, React.ReactNode> = {
  Target: <Target size={32} />,
  Users: <Users size={32} />,
  Search: <Search size={32} />,
  MessageCircle: <MessageCircle size={32} />,
  Palette: <Palette size={32} />,
  Compass: <Compass size={32} />,
  Lightbulb: <Lightbulb size={32} />,
  Code: <Code size={32} />,
  Calendar: <Calendar size={20} />,
  Linkedin: <Linkedin size={20} />,
  Github: <Github size={20} />,
  Link2: <Link2 size={20} />,
};

export const hero = {
  badge: "Open to new opportunities",
  heading1: "Maker,",
  heading2: "Mentor,",
  heading3: "Curious Collaborator.",
  tagline: "Kia Ora, I\'m Haunani Pao",
  description:
    "Seasoned Product Designer blending UX and community to craft user-centric Web3 experiences. Career spans product, enterprise, SaaS consultancy, startups, and government across the US, NZ, and Australia.",
  connect: "Find me:",
  location: "Auckland,NZ · Tāmaki Makaurau, Aotearoa",
  rights: "Right to Work in NZ & US",
};

export const heroImage = {
  name1: "Haunani",
  name2: "Pao",
  nickname: "Nani",
  src: ImageHPao,
  alt: "A Photo, a Nano Banana and a Prompt, walk into a cafe = Minimalist black and white vector portrait of Haunani Pao.",
};

export const myArtIntro = {
    sectionLabel: "Practice makes Permanent",
    heading1: "I’m on ",
    heading2: "My Art Journey",
    desc: "There was a stretch where my “drawing” was nothing but wireframes—boxes, arrows, and flows.  In tech, there’s an assumption that if you’re a designer, you must have drawing skills, right? Well, that was not always the case. For the past few years, I practice my creativity through illustration. I’m deeply into art across styles, and I keep building my self-taught practice in both digital and traditional mediums. ",
    src: ImageMyArt,
    alt: "Rangitoto island in Auckland, Matariki Na Hoku (Pleiades Stars) and Kāloakūlua - a waning crescent of Ka Mahina, aka The Moon, near dawn on 10 July, 2026 for one of my favourite NZ holidays - Matariki. Inspired by Vincent Van Gogh's Starry Night. Drawn in Procreate. Language Māori, Hawaiian and English used together to suit me, so apologise for the using them a little haphazardly 😉.",
  };

export const stats = [
  { number: "20+", label: "Years Experience" },
  { number: "100+", label: "Projects" },
  { number: "50+", label: "Usability Studies" },
  { number: "40+", label: "Clients" },
];

export const workIntro = {
    sectionLabel: "Selected Work",
    heading1: "My Adventures in ",
    heading2: "Making and Participating",
    desc: "These are some of the explorations I've done in Design, Coding and Web 3.",
  };

export const caseStudies = [  
  {
    tag: "Web3 · Fusion Talks · Developer Relations ",
    title: "A Designer\u2019s Journey in Art, Tech, and Web3",
    desc: "I share my maker journey across tech and creativity, expanding my skills through hands-on Web3 projects and experiences. From coding in hackathons and supporting Web3 developer relations for an artist app on Polygon, to creating and hosting Fusion Talks\u2014deep conversations with people building in Web3.",
    link: "https://haunanipao.medium.com/exploring-the-intersection-a-designers-journey-in-art-tech-and-web3-collaboration-e4bb14969fcb",
    linkText: "Read case study",
  },
  {
    tag: "Codesign Workshop · Community",
    title: "#SecretlyImprov Codesign Workshop",
    desc: "Organised and supported #SecretlyImprov, a co-design workshop blending UX and improv, in collaboration with a colleague who led the techniques. Created event collateral and helped shape the experience, exploring how casual design conversations spark unexpected ideas. Featured at UX Auckland community events.",
    link: "https://haunanipao.medium.com/the-secretlyimprov-codesign-workshop-unexpected-ideas-take-root-4ecb61547d15",
    linkText: "Read case study",
  },
  {
    tag: "Full Stack Dev · Web3 · Hackathon",
    title: "Happy Honu \u2014 Web3 Game",
    desc: "Built for READY PLAYER 3, thirdweb\u2019s Web3 gaming hackathon, with a Hawai\u02BBi-connected team. Inspired by Flappy Bird, Happy Honu is an endless swimmer with NFT integration, built in Unity with C# and the thirdweb SDK\u2014my first hackathon as a developer, diving into Web3 and blockchain.",
    link: "https://devpost.com/software/happy-honu",
    linkText: "View project",
  },
  {
    tag: "Coding · Personal Growth",
    title: "WOW \u2014 Words of Wisdom",
    desc: "A full-stack React app collecting words of wisdom from my Dev Academy Aotearoa cohort in 2022, Manaia. Built with JavaScript, React, Express, and PostgreSQL, and deployed on Vercel. It's simple, evolving, and intentionally unfinished\u2014used to explore vibe coding and grow my development practice.",
    link: "https://wow-manaia.vercel.app",
    linkText: "View live",
  },
];

export const capability = {
    sectionLabel: "Capabilities",
    heading1: "Bridging the gap ",
    heading2: "between Design and Code",
    desc: "My work bridges design, research, and delivery\u2014shaped by years across product, enterprise, and government. I\u2019m now expanding into full-stack development, vibe coding and Web3 to deepen how I build and collaborate.",
  };

export const skills = {
  leadership: [
    "Client-facing",
    "Design Team Management",
    "Design Sprints",
    "Workshop Facilitation",
    "Mentoring Designers",
    "Public speaking",
  ],
  strategy: [
    "Research",
    "Concept Design",
    "Product Design",
    "Service Design",
    "Information Design",
    "Quant/Qual Research",
  ],
  experience: [
    "User Interface",
    "Interaction Design",
    "Brand",
    "UX Writing",
    "Illustration",
  ],
  build: [
    "Functional Design",
    "Design Systems",
    "JavaScript / TypeScript",
    "HTML / CSS",
    "React",
    "API / DB / SQL",
    "GitHub / Vercel",
  ],
};

export const industries = [
  "Art",
  "Community",
  "Computers",
  "Culture",
  "Education",
  "Energy",
  "Entertainment",
  "Finance",
  "Games",
  "Government",
  "Healthcare",
  "Insurance",
  "Media",
  "Mortgage",
  "Non-Profit",
  "Retail",
  "Sensitive Subjects",
  "Social Good",
  "Technology",
  "Tourism",
  "Web3",
];

export const principleIntro = {
    sectionLabel: "How I Work",
    heading1: "My Design Principles & ",
    heading2: "Collaboration Philosophy",
    desc: "My approach to design—how I think, collaborate, and build. They reflect my values, methodologies, and priorities when it comes to designing solutions.",
  };

export const designPrinciples = [
  {
    icon: "Target",
    title: "Plan",
    desc: "I like a plan of what needs to get done. Time spent in planning helps anticipate issues and changes that come down the work stream, yet not derail the progress of the work.",
  },
  {
    icon: "Users",
    title: "Collaborate",
    desc: "I like to form collaboration agreements with others so we know how to work effectively and respectfully to our constraints \u2014 preferably over a hot beverage.",
  },
  {
    icon: "Search",
    title: "Research",
    desc: "I like to give myself time to research the problem I'm solving. I use various quant/qual techniques to understand different perspectives, because it helps to form a concept that solves the problem.",
  },
  {
    icon: "MessageCircle",
    title: "Feedback",
    desc: "I like to get feedback and interview people for \u201Cshow and tell\u201D sessions as I conceptualise solutions. I like them to tell me what\u2019s important to them, and what they need.",
  },
  {
    icon: "Palette",
    title: "Focused Design",
    desc: "I design heuristically, crafting solutions that address the gestalt of our human condition within technology scenarios. I dip into a focused design mode for solutions that describe the user experience from different perspectives.",
  },
  {
    icon: "Compass",
    title: "Explore & Grow",
    desc: "I explore new technologies to grow knowledge and make things with other curious collaborators, using my organisational, artistic and coding skills. These activities strengthen my learnings through repetition and practice.",
  },
];

export const communityIntro = {
    sectionLabel: "Community",
    heading1: "Giving ",
    heading2: "Back",
    desc: "",
  };

export const uxa = {
  heading1: "Managing Organiser since 2013",
  heading2: "User Experience Auckland",
  desc: "I'm the Managing Organiser of User Experience Auckland, a volunteer-led community creating fun industry and networking events, where designers come together to learn, share what they know and grow their craft.",
  stats: [
    { number: "3,300+", label: "Meetup Members" },
    { number: "150+", label: "Events Since 2010" },
    { number: "14yrs", label: "And Counting" },
    { number: "4.7/5", label: "614 Meetup Ratings" },
  ],
  label: "Visit UX Auckland's Linktree",
  link: "https://linktr.ee/uxauckland",
};

export const adplist = {
  heading1: "Mentor since 2021 · ADPList",
  heading2: "ADPList Mentor",
  desc: "Mentoring the next generation of designers through ADPList — helping them navigate career pivots, grow their craft, and build confidence across disciplines and time zones.",
  stats: [
    { number: "50+", label: "Designers" },
    { number: "14", label: "Countries" },
    { number: "2100", label: "Minutes" },
  ],
  label: "View My ADPList Profile ",
  link: "https://adplist.org/mentors/haunani-pao",

  // I didn't include author's name, just where they came from.
  quotes: [
    { text: "Haunani has incredible insight and empathy. The feedback I received was both professional and genuinely helpful. I really appreciated how constructive the advice was — Haunani noticed the areas where I could improve with sharp observation and pointed them out honestly but kindly. That honesty was something I truly valued, because it’s what helps me grow. She was very encouraging and made me feel completely safe and supported, without any sense of judgment.", author: "ADPList Mentee - NZ" },
    { text: "Haunani Pao redefines what it means to \"go above and beyond\". She searched for the best solutions for my specific situations by taking the time to research my learning environment. She not only gave me functional next steps but took the time to ensure I had a deep understanding of the outlook and attitude I should have toward my endeavor. Throughout it all she maintained a light hearted and genuine personality.", author: "ADPList Mentee - USA" },
    { text: "After the session with Haunani, I feel uplifted and ready for my next steps. She is such a generous, tactful and knowledgeable mentor. I enjoyed our conversation about the design, job searching uncertainties and vulnerability. Her review of my CV and portfolio was very insightful and gave me new perspectives I had not thought about. Haunani is a great storyteller and provided me with helpful resources to look at to improve my storytelling. Thank you for meeting with me, Haunani!", author: "ADPList Mentee - NZ" },
    { text: "This is a long overdue review. I had a valuable conversation with Haunani regarding the challenges junior designers often face when upper management treats them harshly. Haunani's compassionate and understanding approach made her a valuable resource, and I believe her advice would be beneficial to any junior designer facing similar challenges.", author: "ADPList Mentee - China" },
    { text: "Wow! Meeting Haunani was exceptional – she understood exactly the challenges I face and had tons of recommendations and advices. We exceeded our session time by far and I’m very grateful that she took the time to exchange with me and get to know me better. She has an incredible knowledge about UX Research, Research Ops and Leadership. She is very approachable and took her time to listen, explain and answer all my questions. Haunani is wonderful mentor who truly cares about the mentee. I can fully recommend a mentoring session with her and I'm looking forward to meet her again in the future.", author: "ADPList Mentee - Germany" },
  ],
};

// For future idea still brewing in the cranium.
export const aboutNani = {
  facts: [
    {
      label: "Currently",
      value:
        "Returning to active work · Coaching · Managing UX Auckland · Growing vibe coding skills",
    },
    {
      label: "Work Rights",
      value: "Available to work legally in both USA and Aotearoa / New Zealand",
    },
    {
      label: "Outside Work",
      value: "Art journey in traditional & digital mediums",
    },
    {
      label: "Volunteering",
      value: "UX Auckland · ADPList mentor · Wāhine in Tech founder",
    },
  ],
};

export const contact = {
  sectionLabel: "Get in touch", 
  heading1: "Let's ",
  heading2: "Talk",
  desc1: "Open to freelance/contract opportunities in UX/Product Design, Coding and Web3.",
  desc2: "Open to UX/Product Design, Coding and Web3 opportunities.",
  links: [
    {
      label: "Let's Talk",
      href: "https://calendly.com/uxauckland/meet-with-haunani",
      icon: "Calendar",
      primary: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/haunani/",
      icon: "Linkedin",
      primary: false,
    },
    {
      label: "GitHub",
      href: "https://github.com/haunanipao",
      icon: "Github",
      primary: false,
    },
    {
      label: "CV on Linktree",
      href: "https://linktr.ee/haunanipao",
      icon: "Link2",
      primary: false,
    },
  ],
};
