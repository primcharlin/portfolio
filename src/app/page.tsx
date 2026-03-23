import Hero from "../components/Hero";
import Works from "../components/Works";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Works />
      <Experience />
      <Contact />
    </main>
  );
}
