import {useRef} from 'react'
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_d6aj2lw', 'template_41orkiq', form.current, 'tx3Q3atJsYPq2xTPe')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
      <form ref={form} onSubmit={sendEmail}>
        <h2>Contact Us!</h2>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="text" name="subject" />
        <label>Subject</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input onClick={sendEmail} type="submit" value="Send" />
      </form>
  );
}

export default ContactForm