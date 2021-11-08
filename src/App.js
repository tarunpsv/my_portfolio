import NavigationComponent from './Components/NavigationComponent'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import TypeWriter from '../src/Components/TypeWritter/TypeWriter'
import About from './Components/Sid/About/About'
import Contact from './Components/Sid/Footer/Contact'
import Projects from './Components/Sid/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'
import SecondNav from './Components/SecondNav'
import Skills from './Components/Sid/Levels/Skills/Skills.jsx'
import Arrow from './Components/Sid/ScrollUpArrow/Arrow'
function App() {
  return (
    <div>
      {/* <NavigationComponent /> */}
      <SecondNav />
      <div className="tarun">
        <TypeWriter />
        <div className="temp-arrow">
          <Arrow />
        </div>
        <About />

        <Skills />
        <Projects />
        {/* <Achievements /> */}

        <Contact />
      </div>
    </div>
  )
}

export default App
