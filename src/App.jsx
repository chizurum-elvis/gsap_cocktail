import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Navbar from "@/src/components/Navbar"
import Hero from "@/src/components/Hero"
import Cocktails from "@/src/components/Cocktails"
import About from "@/src/components/About"
import Art from "@/src/components/Art"
import Menu from "@/src/components/Menu"
import Contact from "@/src/components/Contact"
gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menu />
        <Contact />
    </main>
  )
}

export default App