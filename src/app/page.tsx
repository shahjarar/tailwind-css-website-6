import Image from "next/image";
import Hero from "@/components/Hero";
import { Skills } from "@/components/Skills";
import About from "./About/Page";
import Project from "./Projects/Page";
import Contact from "./Contact/Page";
import Navbar from "@/components/Navbar";





export default function Home() {
  return (
   <div>
   <Hero/>
   <Skills/>
   <About/>
   <Project/>
   <Contact/>
   <Navbar/>
    </div>

  );
}