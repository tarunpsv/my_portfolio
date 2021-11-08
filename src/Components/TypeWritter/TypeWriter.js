import React from 'react'
import img4 from './Profile_Pic.jpeg'
//importing typewriter-effect
import Typewriter from 'typewriter-effect'
import {Button} from "@material-ui/core";
function TypeWriter() {
  var t = "I'm"
  return (
    <div className="exp">
      <div className="App">
        <div>
          <div>Hello, I'm Tarun Kumar</div>
          <div className="below-name">
            {t}
            <div>
              <span className="color">
                <Typewriter
                  options={{
                    strings: [
                      'Computer Science Student',
                      'Front End Web Developer',
                      'NITIAN',
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: '_',
                    pauseFOr: 3400,
                    deleteSpeed: 50,
                    delay: 150,
                  }}
                />
              </span>
            </div>
          </div>
          <a style={{textDecoration:'none'}} href="https://drive.google.com/file/d/1XvQTfwsgWXBiaRxL-8_ieVHPE2t94Ls6/view?usp=sharing" title="Resume" rel="noreferrer" target="_blank">
              <Button variant="contained">
                        VIEW RESUME
              </Button>
          </a>
        </div>
      </div>
      <div className="exp-2">
        <img className="image" src={img4} alt="sid" />
      </div>
      
    </div>
  )
}

export default TypeWriter
// onInit={(typewriter) => {
//   typewriter

//     .typeString('GeeksForGeeks')

//     .pauseFor(1000)
//     .deleteAll()

//     .typeString('Welcomes You')

//     .pauseFor(1000)
//     .deleteAll()

//     .typeString('Siddhartha')

//     .pauseFor(1000)
//     .deleteAll()

//     .start()
// }}
