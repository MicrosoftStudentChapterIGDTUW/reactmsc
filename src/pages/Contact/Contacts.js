import React, { useRef, useEffect } from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import location from "./location.png";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formElement = form.current;

    emailjs.sendForm('service_gnf36lt', 'template_xzoxnk5', formElement, 'ZpuZXBX47HXKAX1O2')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent");
          form.current.reset();  // Reset the form
          toast.success("Your form has been submitted successfully!");  // Display success toast notification
      }, (error) => {
          console.log(error.text);
          toast.error("An error occurred while sending the form. Please try again.");  // Display error toast notification
      });
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);

  return (
    <>
      <div className="containerc">
        <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text1">Send us the message and contact now. Get your all queries resolved here!</p>

            <div className="info">
              <div className="information">
                <img src={location} className="icon" alt="location" />
                <p>IGDTUW, Delhi-110006</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-media-icons">
                <a href="https://twitter.com/IgdtuwMsc">
                  <i className="fa"> <FaTwitter /> </i>
                </a>
                <a href="https://www.instagram.com/msc.igdtuw/">
                  <i className="fa"> <FaInstagram /> </i>
                </a>
                <a href="https://www.linkedin.com/company/microsoft-student-chapter-igdtuw/">
                  <i className="fa"> <FaLinkedin /> </i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form ref={form} action="https://formsubmit.co/microsoftstudentchapter.igdtuw@gmail.com" method="POST" autoComplete="off" onSubmit={sendEmail}>
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" id="username" />
                <label htmlFor="">Name</label>
                <span>Name</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" id="email" />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" id="phone" />
                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" id="message"></textarea>
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" name="submit" value="Send" className="btn" onClick={sendEmail} />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Contacts;
