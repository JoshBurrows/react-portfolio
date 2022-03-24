import Navbar from "./Navbar";
import Footer from "./Footer";
import { Accordion } from "react-bootstrap";
import "../styles/About.css";

export default function About(props) {
  const aboutMe = (e) => {
    e.preventDefault();
    window.open("http://www.linkedin.com/in/jburrowsdev", "_blank");
  };
  return (
    <>
      <Navbar />
      <section className="text-light d-flex align-items-center justify-content-center container-fluid">
        <div className="abtMeContainer container">
          <h1>About Me</h1>
          <Accordion className="" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>The Short</Accordion.Header>
              <Accordion.Body className="bg-info text-dark">
                Like most people I enjoy being outdoors, reading a good book,
                playing a good game, or watching a good movie. I still get
                excited anytime I learn something new, and if it happens to be a
                good joke I'll probably steal it.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>The Long</Accordion.Header>
              <Accordion.Body className="bg-info text-dark">
                I've always been self motivated and have been working for myself
                for the past 9 years in the construction industry. Having always
                had a love of creating new things and building projects to
                completion, I decided to try and take that passion to the
                digital space. Starting in September of 2021 I wrote my first
                little piece of html that showed 'Hello World' in my browser,
                and have since dedicated every spare second of my day to
                becoming a front-end developer.
                <br />
                <br />
                In my day to day construction life I take on many roles. I've
                done every aspect of construction from being a day laborer to
                general contracting my own jobs. Out of the many projects I've
                been involved with the most notable is, Naskila Entertainment.
                Naskila Entertainment is a 100,000 sq. ft. casino located on the
                Alabama-Coushatta tribe of Texas land. My role on this project
                was Construction Manager for phase 1 and phase 2 of the
                construction process. The role required me to develop scopes of
                work, subcontract out scopes of work, follow a bid process,
                communicate with a large team, regular job-site visits and
                inspections, managing progress, and meeting deadlines. Along
                with all the associated task of the aforementioned.
                <br />
                <br />I think we all gather skills as we live and work, and its
                important to carry those things with you into new endeavors.
                This way you're constantly growing on existing skills while
                expanding into new ones.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Personal skills</Accordion.Header>
              <Accordion.Body className="bg-info text-dark">
                <ul>
                  <li>The ability to follow through</li>
                  <li>The ability to self-motivate</li>
                  <li>Communication</li>
                  <li>Dedication</li>
                  <li>Great work ethic</li>
                  <li>
                    I have a vast knowledge of construction and construction
                    process
                  </li>
                  <li>
                    Understanding of a wide range of tools, and their uses
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Technical skills</Accordion.Header>
              <Accordion.Body className="bg-info text-dark">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>SASS</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Node</li>
                  <li>React</li>
                  <li>And More!</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Goals</Accordion.Header>
              <Accordion.Body className="bg-info text-dark">
                <ul>
                  <li>Software Engineer</li>
                  <li>Build new and exciting projects</li>
                  <li>Make new friends</li>
                  <li>Learn something everyday</li>
                  <li>Write some code everyday</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <p className="mt-3">
            If you'd like to learn even more about me, please click the button
            below and you will be taken to my LinkedIn. Connect with me there,
            let's get to know each other.
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={aboutMe}
          >
            Learn Even More!
          </button>
        </div>
      </section>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </>
  );
}
