import Fade from 'react-bootstrap/Fade'
import Alert from 'react-bootstrap/Alert';
import React from 'react';

import ContactForm from "./ContactForm"

export default function Contact () {
    return(
        <div>
            <h1>Graduating December 2022!</h1>
            <Fade mountOnEnter>
                <h2>Set up an interview with me for more information.</h2>
                <ContactForm />
            </Fade>
            <h3>Check out the projects I have completed here!</h3>
            <div>
                 <Alert variant="success">SUCCESS!! This is a success alert—check it out!</Alert>
            </div>
            <br/>
        </div>
    )

}