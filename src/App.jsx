import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-indigo-300">Hello World</h1>
    </div>
  )
}

export default App