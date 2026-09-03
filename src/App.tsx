import { MouseEvent, ReactNode, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./App.css";

const GIFS = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif", "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif", "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif", "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif", "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif", "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif", "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif", "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif", "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif", "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif", "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif", "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif", "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif", "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif", "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif", "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif", "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif", "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif", "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif", "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif", "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const PROJECTS = [
  ["Client", "Nextlevel Studio", ["https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85", "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85", "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"]],
  ["Personal", "Aura Brand Identity", ["https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85", "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85", "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"]],
  ["Client", "Solaris Digital", ["https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85", "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85", "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"]],
] as const;

const SERVICES = [
  ["3D Modeling", "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."],
  ["Rendering", "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."],
  ["Motion Design", "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."],
  ["Branding", "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."],
  ["Web Design", "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."],
];

function FadeIn({ children, delay = 0, x = 0, y = 30 }: { children: ReactNode; delay?: number; x?: number; y?: number }) {
  return <motion.div initial={{ opacity: 0, x, y }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: "50px", amount: 0 }} transition={{ delay, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>{children}</motion.div>;
}

function Magnet({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box || Math.max(box.left - event.clientX, event.clientX - box.right, box.top - event.clientY, event.clientY - box.bottom) > 150) return;
    ref.current!.style.transform = `translate3d(calc(-50% + ${(event.clientX - (box.left + box.width / 2)) / 3}px), ${(event.clientY - (box.top + box.height / 2)) / 3}px, 0)`;
  };
  return <div ref={ref} className="magnet" onMouseMove={onMove} onMouseLeave={() => { if (ref.current) ref.current.style.transform = "translate3d(-50%,0,0)"; }}>{children}</div>;
}

function ContactButton() { return <a className="contact-button" href="mailto:hello@jackcreator.com">Contact me <ArrowUpRight size={18} /></a>; }
function LiveProjectButton() { return <button className="live-button">Live project <ArrowUpRight size={17} /></button>; }

function Hero() {
  return <section className="hero" id="about"><FadeIn y={-20}><nav>{["About", "Price", "Projects", "Contact"].map((item) => <a key={item} href={item === "Projects" ? "#projects" : `#${item.toLowerCase()}`}>{item}</a>)}</nav></FadeIn><FadeIn delay={0.15} y={40}><div className="heading-wrap"><h1 className="hero-heading">Hi, i&apos;m jack</h1></div></FadeIn><FadeIn delay={0.6} y={30}><Magnet><img className="portrait" src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" alt="Jack's 3D portrait" /></Magnet></FadeIn><div className="hero-bottom"><FadeIn delay={0.35} y={20}><p>a 3d creator driven by crafting striking and unforgettable projects</p></FadeIn><FadeIn delay={0.5} y={20}><ContactButton /></FadeIn></div></section>;
}

function MarqueeRow({ images, direction }: { images: string[]; direction: number }) {
  const { scrollY } = useScroll();
  const x = useSpring(useTransform(scrollY, (value) => direction * ((value - 200) * 0.12)), { stiffness: 80, damping: 30 });
  return <motion.div className="marquee-row" style={{ x }}>{[...images, ...images, ...images].map((src, index) => <img key={`${src}-${index}`} src={src} loading="lazy" alt="Creative work preview" />)}</motion.div>;
}
function Marquee() { return <section className="marquee"><MarqueeRow images={GIFS.slice(0, 11)} direction={1} /><MarqueeRow images={GIFS.slice(11)} direction={-1} /></section>; }

function About() { const text = "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"; return <section className="about"><img className="decor moon" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" /><img className="decor object" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="" /><img className="decor lego" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" /><img className="decor group" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="" /><FadeIn><div className="about-content"><h2 className="hero-heading">About me</h2><p>{text}</p><ContactButton /></div></FadeIn></section>; }

function Services() { return <section className="services" id="price"><FadeIn><h2>Services</h2></FadeIn><div className="service-list">{SERVICES.map(([name, description], i) => <FadeIn key={name} delay={i * 0.1}><article className="service"><span>0{i + 1}</span><div><h3>{name}</h3><p>{description}</p></div></article></FadeIn>)}</div></section>; }
function ProjectCard({ project, index }: { project: typeof PROJECTS[number]; index: number }) { const ref = useRef(null); const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] }); const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (2 - index) * 0.03]); return <div ref={ref} className="project-wrap"><motion.article className="project-card" style={{ scale, top: `${96 + index * 28}px` }}><div className="project-header"><span>0{index + 1}</span><div><small>{project[0]}</small><h3>{project[1]}</h3></div><LiveProjectButton /></div><div className="project-images"><div><img src={project[2][0]} alt="Project preview" /><img src={project[2][1]} alt="Project preview" /></div><img src={project[2][2]} alt="Project preview" /></div></motion.article></div>; }
function Projects() { return <section className="projects" id="projects"><FadeIn><h2 className="hero-heading">Project</h2></FadeIn>{PROJECTS.map((project, index) => <ProjectCard key={project[1]} project={project} index={index} />)}</section>; }

export default function App() { return <main><Hero /><Marquee /><About /><Services /><Projects /></main>; }
