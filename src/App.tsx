import { MouseEvent, ReactNode, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import profilePhoto from "./img/me.jpg";
import "./App.css";

const GIFS = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
];

const SKILLS = [
  ["Languages", "JavaScript, Python, Java, C, C++, and HTML/CSS."],
  ["Frontend", "React, Vue.js, Redux, jQuery, and responsive web interfaces."],
  ["Backend", "Node.js, SQL, MongoDB, PostgreSQL, Nginx, Apache, and Selenium."],
  ["Cloud & tools", "Git, Docker, AWS, GCP, Heroku, Firebase, and CI/CD workflows."],
];

const PROJECTS = [
  {
    name: "Amrita Wallet",
    category: "Full stack application",
    description: "A digital transaction application for a university canteen. The interface was updated using modern Vue.js features.",
    image: "https://i.imgur.com/O30bnh4.png",
    link: "https://github.com/Arjun2001",
  },
  {
    name: "HarMoney",
    category: "UofT Hacks 2020",
    description: "A mobile application that streamlines group bill payments through shared rooms and invitation flows.",
    image: "https://i.imgur.com/sCb7zFm.png",
    link: "https://github.com/matthuynh/harmoney",
  },
  {
    name: "VapeSafe",
    category: "3rd place · EngHacks 2019",
    description: "An Android and Arduino project that helps people manage daily vape usage and review their statistics.",
    image: "https://i.imgur.com/tWg1PJn.png",
    link: "https://github.com/leviaviv28/VapeSafe-EngHack2019",
  },
];

function FadeIn({ children, delay = 0, x = 0, y = 30 }: { children: ReactNode; delay?: number; x?: number; y?: number }) {
  return <motion.div initial={{ opacity: 0, x, y }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: "50px", amount: 0 }} transition={{ delay, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>{children}</motion.div>;
}

function Magnet({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box) return;
    ref.current?.style.setProperty("transform", `translate3d(calc(-50% + ${(event.clientX - (box.left + box.width / 2)) / 12}px), ${(event.clientY - (box.top + box.height / 2)) / 12}px, 0)`);
  };
  return <div ref={ref} className="magnet" onMouseMove={onMove} onMouseLeave={() => { if (ref.current) ref.current.style.transform = "translate3d(-50%,0,0)"; }}>{children}</div>;
}

function ContactButton() { return <a className="contact-button" href="mailto:arjundevpk2001@gmail.com">Contact me <ArrowUpRight size={18} /></a>; }

function Hero() {
  return <section className="hero" id="home">
    <FadeIn y={-20}><nav>{[["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]].map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav></FadeIn>
    <FadeIn delay={0.15} y={40}><div className="heading-wrap"><h1 className="hero-heading">Hi, i&apos;m arjun</h1></div></FadeIn>
    <FadeIn delay={0.6} y={30}><Magnet><img className="portrait" src={profilePhoto} alt="Arjun Dev PK" /></Magnet></FadeIn>
    <div className="hero-bottom"><FadeIn delay={0.35} y={20}><p>a full stack developer focused on efficient, elegant experiences</p></FadeIn><FadeIn delay={0.5} y={20}><ContactButton /></FadeIn></div>
  </section>;
}

function MarqueeRow({ images, direction }: { images: string[]; direction: number }) {
  const { scrollY } = useScroll();
  const x = useSpring(useTransform(scrollY, (value) => direction * ((value - 200) * 0.12)), { stiffness: 80, damping: 30 });
  return <motion.div className="marquee-row" style={{ x }}>{[...images, ...images, ...images].map((src, index) => <img key={`${src}-${index}`} src={src} loading="lazy" alt="Digital work preview" />)}</motion.div>;
}

function Marquee() { return <section className="marquee" aria-label="Creative work"><MarqueeRow images={GIFS.slice(0, 6)} direction={1} /><MarqueeRow images={GIFS.slice(6)} direction={-1} /></section>; }

function About() {
  return <section className="about" id="about"><FadeIn><div className="about-content"><h2 className="hero-heading">About me</h2><p>Hi, I&apos;m <strong>Arjun Dev PK</strong>, a full stack developer at <strong>IBM CIO</strong> in Bangalore. I enjoy developing efficient full stack applications and optimizing the user experience for a simple, elegant journey. I&apos;m passionate about coding, have built projects across the stack, and actively take part in competitive programming contests.</p><ContactButton /></div></FadeIn></section>;
}

function Skills() {
  return <section className="services" id="skills"><FadeIn><h2>Skills</h2></FadeIn><div className="service-list">{SKILLS.map(([name, description], index) => <FadeIn key={name} delay={index * 0.1}><article className="service"><span>0{index + 1}</span><div><h3>{name}</h3><p>{description}</p></div></article></FadeIn>)}</div></section>;
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (2 - index) * 0.03]);
  return <div ref={ref} className="project-wrap"><motion.article className="project-card" style={{ scale, top: `${96 + index * 28}px` }}><div className="project-header"><span>0{index + 1}</span><div><small>{project.category}</small><h3>{project.name}</h3></div><a className="live-button" href={project.link} target="_blank" rel="noreferrer">View project <ArrowUpRight size={17} /></a></div><div className="project-preview"><img src={project.image} alt={`${project.name} preview`} /><p>{project.description}</p></div></motion.article></div>;
}

function Projects() { return <section className="projects" id="projects"><FadeIn><h2 className="hero-heading">Projects</h2></FadeIn>{PROJECTS.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</section>; }

function Contact() {
  return <section className="contact" id="contact"><FadeIn><h2 className="hero-heading">Let&apos;s connect</h2><p>Whether it&apos;s a job opportunity, an invite to coffee, or feedback on my portfolio, my inbox is open.</p><ContactButton /><div className="social-links"><a href="https://github.com/Arjun2001" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/arjun2001/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="https://twitter.com/arjundevpk" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter /></a><a href="mailto:arjundevpk2001@gmail.com" aria-label="Email"><Mail /></a></div></FadeIn></section>;
}

export default function App() { return <main><Hero /><Marquee /><About /><Skills /><Projects /><Contact /></main>; }
