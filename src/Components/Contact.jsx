import Fade from 'react-bootstrap/Fade'
import React from 'react';
import githubicon from '../../public/github-mark.png'

import ContactForm from "./ContactForm"

export default function Contact () {
    return(
        <div className='Contact'>
            <h2>Graduated December 2022</h2>
            <Fade mountOnEnter>
                <h3>Contact me for more details</h3>
                <ContactForm />
            </Fade>
            <h3>Check out the projects I have completed here</h3>
            <a href='https://github.com/cre8ivesolutions'><p>Check out my Github</p>
            <img src='githubicon'></img>
            </a>
            <br/>
        </div>
    )

}