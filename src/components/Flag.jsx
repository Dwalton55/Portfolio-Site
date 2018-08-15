import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PageTransition from 'react-router-page-transition';
import './Flag.css';

class Flag extends Component {
    render() {
        return (
            <div className="grid">
                {/* ======================================= */}
                <div to="/" className="blue1" >

                    <div className='.title'>Code Bridge</div>
                    <div className="overlay">
                        <a href='https://independentmma.herokuapp.com' className="text" target="_blank">Hello World</a>
                    </div>

                </div>
                {/* ============================================= */}
                {/* ======================================= */}
                <div to="/" className="blue2" >

                    <div className='.title'>project 1</div>
                    <div className="overlay">

                        <a href='https://stupefied-khorana-32c66a.netlify.com' className="text" target="_blank">Hello World</a>
                    </div>

                </div>
                {/* ============================================= */}
                {/* ======================================= */}
                <div to="/" className="blue3" >

                    <div className='.title'>project 2</div>
                    <div class="overlay">
                        <a href='https://vast-thicket-41925.herokuapp.com/' className="text" target="_blank">Hello World</a>
                    </div>

                </div>
                {/* ============================================= */}
                {/* ======================================= */}
                <div to="/" className="blue4" >

                    <div className='.title'>project 3</div>
                    <div class="overlay">
                        <a href='https://rocky-river-76458.herokuapp.com/' className="text" target="_blank">Hello World</a>
                    </div>

                </div>
                {/* ============================================= */}
                {/* ======================================= */}
                <div to="/" className="blue5" >

                    <div className='.title'>Project 4</div>
                    <div class="overlay">
                        <a href='https://independentmma.herokuapp.com' className="text" target="_blank">Hello World</a>
                    </div>

                </div>
                {/* ============================================= */}
                {/* ======================================= */}
                <div to="/" className="blue6" >

                    <div className='.title'>Team Project</div>
                    <div class="overlay">


                        <a href='https://vagabond99.herokuapp.com/cities/7' className="text" target="_blank">Hello World</a>
                    </div>

                </div>
                {/* ============================================= */}
                {/* ======================================= */}
                <div to="/" className="red1" >

                    <div className='.title'>About Me</div>
                    <div class="overlay">
                        <div class="text">A strong developer specialising in turning dreams to reality</div>
                    </div>

                </div>
                {/* ============================================= */}
                {/* ======================================= */}
                <div to="/" className="red2" >

                    <div className='.title'>Skills</div>
                    <div class="overlay">
                    <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Express</li>
                            <li>Mongo</li>
                            <li>Rails</li>
                            
                        </ul>
                    </div>

                </div>
                {/* ============================================= */}
                {/* ======================================= */}
                <div to="/" className="red3" >

                    <div className='.title'>Work History</div>
                    <div class="overlay">
                    <ul>
                            <li>Pivot Technology</li>
                            <li>Wells Fargo</li>
                            <li>US. Marine Corps</li>
                        </ul>
                    </div>

                </div>
                {/* ============================================= */}
                {/* ======================================= */}
                <div to="/" className="white1" >

                    <div className='.title'>Contact Me</div>
                    <div class="overlay">
                        <ul>
                            <li>Email: deonte.e.walton@gmail.com</li>
                            <li>Cell:  678-469-0083 </li>
                            
                        </ul>
                    </div>

                </div>
                {/* ============================================= */}
                {/* ======================================= */}
                <div to="/" className="white2" >

                    <div className='.title'>Education</div>
                    <div class="overlay">
                        <ul>
                            <li>CodeBridge: <a href="https://github.com/Dwalton55/">Click here to learn More</a></li>
                            <li>Year Up: <a href="https://www.linkedin.com/in/deontewalton/">Click here to learn More</a></li>
                            <li>USMC: GRRC/Comm</li>
                        </ul>
                    </div>

                </div>
                {/* ============================================= */}
                {/* ======================================= */}
                <div to="/" className="white3" >

                    <div className='.title'>Links</div>
                    <div class="overlay">
                        <div class="text">
                            <ul>
                                <li>Github: <a href="https://github.com/Dwalton55/">Deon</a></li>
                                <li>Linkedin: <a href="https://www.linkedin.com/in/deontewalton/">Deon</a></li>

                            </ul></div>
                    </div>

                </div>
                {/* ============================================= */}
            </div>
        );
    }
}

export default Flag;