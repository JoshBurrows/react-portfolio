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
      setMessage(
        "Your message was sent! If you'd like to send another just replace this text with your new message, otherwise use the menu to navigate."
      );
      setEmailSent(true);
      console.log(emailSent);
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <>
      <Navigation />
      <div className="container pt-5 d-flex align-items-center justify-content-center ">
        <form className="myForm mt-5 p-3 bg-secondary rounded">
          <h2 className=" text-dark text-center">Email me</h2>
          <p className="text-dark text-center">I want to talk to you.</p>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control is-invalid"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              name="message"
              placeholder="Message"
              rows="14"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary" onClick={submit}>
              send
            </button>
          </div>
        </form>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}
