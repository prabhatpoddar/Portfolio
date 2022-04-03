import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine} from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fk6ywf5', 'template_gifudc3', form.current, 
    'Vvh7U4Z1f1OzQk2ws')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>pk041222@gmail.com</h5>
            <a href="mailto:pk041222@gmail.com">Send a Massage</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Massenger</h4>
            <h5>Prabhat Kumar</h5>
            <a href="https://m.me/100013985685716" target="_blank">Send a Massage</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp  className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+919330159522</h5>
            <a href="https://api.whatsapp.com/send?phone=+919330159522">Send a Massage</a>
          </article>
        </div>
        {/* end of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="massage"  rows="7" placeholder="Your Massage" required></textarea>
          <button type="submit" className="btn btn-primary">Send Massage</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
