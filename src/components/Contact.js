import Footer from "./Footer";
import Navigation from "./Navbar";
import "../styles/Contact.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "@emailjs/browser";
init("vBAS3apMvlKSQz_er");

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      const userId = "vBAS3apMvlKSQz_er";
      const templateId = "template_bcena4a";
      const serviceId = "service_02ppl8n";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("Thanks! Your message was sent.");
      setEmailSent(true);
      console.log(emailSent);
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <>
      <Navigation />
      <section className="formContainer">
        <h1 className="projectHeader animate__animated animate__fadeInDown">
          Contact
        </h1>
        <p className="text-light px-4">
          I will not save your email address or information.
        </p>
        <form className="myForm rounded">
          <h2 className="pb-3 text-light text-center">Send email</h2>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="mt-2 form-control is-invalid"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            className="my-2 form-control"
            name="message"
            placeholder="Message"
            rows="14"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button className=" myBtn myFormBtn" onClick={submit}>
            Send
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}
