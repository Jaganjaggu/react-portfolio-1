import React, { useState } from 'react'
import { AiOutlineMail,AiFillLinkedin } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";


import './Contact.css'

function Contact() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!fullName.trim()) {
            errors.fullName = 'Full Name is required';
        }
        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(email)) {
            errors.email = 'Invalid email format';
        }
        if (!message.trim()) {
            errors.message = 'Message is required';
        }
        return errors;
    };

    const isValidEmail = (email) => {
        // Add your email validation logic here
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            // Form is valid, you can proceed with form submission
            // Reset the form fields
            setFullName('');
            setEmail('');
            setMessage('');
            setFormErrors({});
        } else {
            // Update form errors
            setFormErrors(errors);
        }
    };

    return (
        <>
            <section id='contact'>
                <div className='contact-section'>
                    <div className='contact-heading'>
                        <h5>Get in Touch</h5>
                        <h2>Contact Me</h2>
                    </div>
                    <div className='contact-content'>
                        <div className='contect-options'>
                            <div className='contact-card'>
                                <div><AiOutlineMail size={'25px'} color='#fff' /></div>
                                <h4>Email</h4>
                                <h5>jaganvofficial@gmail.com</h5>
                                <div className='contact-link'><a href="mailto:jaganvofficial@gmail.com">Send a mail</a></div>
                            </div>
                            <div className='contact-card'>
                                <div><BsWhatsapp size={'25px'} color='#fff' /></div>
                                <h4>Whatsapp</h4>
                                <h5>+91 9876543210</h5>
                                <div className='contact-link'><a href="https://web.whatsapp.com/" target="_blank">Send a Message</a></div>
                            </div>
                            <div className='contact-card'>
                                <div><AiFillLinkedin size={'30px'} color='#fff' /></div>
                                <h4>Lined in</h4>
                                {/* <h5>jaganvofficial@gmail.com</h5> */}
                                <div className='contact-link'><a href="https://www.linkedin.com/in/jagan-v-1a258621b/" target="_blank">View Profile</a></div>
                            </div>
                        </div>
                        <div className='contact-form-section'>
                            <form onSubmit={handleSubmit}>
                                <div>
                                {formErrors.fullName && (
                                        <div className="error-message"><BiErrorCircle/> {formErrors.fullName}</div>
                                    )}
                                    <input
                                        type="text"
                                        placeholder="Your Full Name"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                   
                                </div>
                                <div>
                                {formErrors.email && (
                                        <div className="error-message"><BiErrorCircle/> {formErrors.email}</div>
                                    )}
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                  
                                </div>
                                <div>
                                {formErrors.message && (
                                        <div className="error-message"><BiErrorCircle /> {formErrors.message}</div>
                                    )}
                                    <textarea
                                        name="message"
                                        id="message"
                                        cols="30"
                                        rows="10"
                                        placeholder="Your Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                    
                                </div>
                                <div>
                                    <input type="submit" value="Send Message" />
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact