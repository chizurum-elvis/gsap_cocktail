import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Navbar from "@/src/components/Navbar"
import Hero from "@/src/components/Hero"
gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <div className="h-dvh bg-black"/>
    </main>
  )
}

export default App