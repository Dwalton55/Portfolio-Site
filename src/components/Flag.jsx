import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PageTransition from 'react-router-page-transition';
import './Flag.css';

class Flag extends Component {
    render() {
        return (
            <div className="grid">
        <Link to= "/"className="blue1" > Project 1 </Link>
        <Link to= "/"className="blue2"> project 2</Link>
        <Link to= "/"className="blue3"> project 3</Link>
        <Link to= "/"className="blue4"> project 4</Link>
        <Link to= "/"className="red1">About me</Link>
        <Link to= "/"className="red2"> Skills</Link>
        <Link to= "/"className="red3"> Work History</Link>
        <Link to= "/"className="white1">Contact me </Link>
        <Link to= "/"className="white2"> Education</Link>
        <Link to= "/"className="white3"> Links</Link>
            </div>
        );
    }
}

export default Flag;