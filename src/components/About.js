import Navigation from "./Navbar";
import Footer from "./Footer";
import "../styles/About.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaBookReader,
  FaProjectDiagram,
  FaTerminal,
  FaExchangeAlt,
} from "react-icons/fa";

export default function About(props) {
  const aboutMe = (e) => {
    e.preventDefault();
    window.open("http://www.linkedin.com/in/jburrowsdev", "_blank");
  };
  return (
    <>
      <Navigation />
      <section className="abtSection text-white">
        <h1 className="projectHeader animate__animated animate__fadeInDown">
          About Me
        </h1>
        <p className="resumeText mx-4">
          Get my resume{" "}
          <a
            href={require("../resume/Resume2022.pdf")}
            download="Resume2022.pdf"
          >
            here
          </a>
        </p>

        <hr />
        <div className="px-4 row m-auto">
          <h3 className="m-4">Tech Stack</h3>
          <p className="col-4 col-md-2 d-flex justify-content-center">
            HTML
            <FaHtml5 className="mx-3" />
          </p>
          <p className="col-4 col-md-2 d-flex justify-content-center">
            CSS
            <FaCss3Alt className="mx-3" />
          </p>
          <p className="col-4 col-md-2 d-flex justify-content-center">
            JS
            <FaJs className="mx-3" />
          </p>
          <p className="col-4 col-md-2 d-flex justify-content-center">
            SASS <FaSass className="mx-3" />
          </p>
          <p className="col-4 col-md-2 d-flex justify-content-center">
            Git <FaGitAlt className="mx-3" />
          </p>
          <p className="col-4 col-md-2 d-flex justify-content-center">
            GitHub
            <FaGithub className="mx-3" />
          </p>
          <p className="col-4 col-md-2 d-flex justify-content-center">
            Node
            <FaNodeJs className="mx-3" />
          </p>
          <p className="col-4 col-md-2 d-flex justify-content-center">
            React
            <FaReact className="mx-3" />
          </p>
          <p className="col-4 col-md-2 d-flex justify-content-center">
            Libraries
            <FaBookReader className="mx-3" />
          </p>
          <p className="col-4 col-md-2 d-flex justify-content-center">
            APIs
            <FaProjectDiagram className="mx-3" />
          </p>
          <p className="col-4 col-md-2 d-flex justify-content-center">
            CLI
            <FaTerminal className="mx-3" />
          </p>
          <p className="col-4 col-md-2 d-flex justify-content-center">
            Express
            <FaExchangeAlt className="mx-3" />
          </p>
        </div>
        <hr />
        <div className="px-5">
          <h3 className="m-4">Personal</h3>
          <p>
            Like most people I enjoy being outdoors, reading a good book,
            playing a good game, or watching a good movie. I still get excited
            anytime I learn something new, and if it happens to be a good joke
            I'll probably steal it.
          </p>

          <p>
            I've always been self motivated and have been working for myself for
            the past 9 years in the construction industry. Having always had a
            love of creating new things and building projects to completion, I
            decided to try and take that passion to the digital space. Starting
            in September of 2021 I wrote my first little piece of html that
            showed 'Hello World' in my browser, and have since dedicated every
            spare second of my day to becoming a developer.
            <br />
            <br />
            In my day to day construction life I take on many roles. I've done
            every aspect of construction from being a day laborer to general
            contracting my own jobs. Out of the many projects I've been involved
            with the most notable is, Naskila Entertainment. Naskila
            Entertainment is a 100,000 sq. ft. casino located on the
            Alabama-Coushatta tribe of Texas land. My role on this project was
            Construction Manager for phase 1 and phase 2 of the construction
            process. The role required me to develop scopes of work, subcontract
            out scopes of work, follow a bid process, communicate with a large
            team, regular job-site visits and inspections, managing progress,
            and meeting deadlines. Along with all the associated task of the
            aforementioned.
            <br />
            <br />I think we all gather skills as we live and work, and its
            important to carry those things with you into new endeavors. This
            way you're constantly expanding on existing skills while growing new
            ones.
          </p>
          <hr />
          <h3 className="m-4">Traits</h3>
          <p>
            <ul>
              <li>The ability to follow through</li>
              <li>The ability to self-motivate</li>
              <li>Communication</li>
              <li>Dedication</li>
              <li>Great work ethic</li>
              <li>
                I have a vast knowledge of construction and construction process
              </li>
              <li>Understanding of a wide range of tools, and their uses</li>
            </ul>
          </p>
          <hr />
          <h3 className="m-4">Goals</h3>
          <p>
            <ul>
              <li>Software Engineer</li>
              <li>Build new and exciting projects</li>
              <li>Make new friends</li>
              <li>Learn something everyday</li>
              <li>Write some code everyday</li>
            </ul>
          </p>

          <p className="mt-3">
            If you'd like to learn even more about me, please click the button
            below and you will be taken to my LinkedIn. Connect with me there,
            let's get to know each other.
          </p>
          <button type="button" className="my-3 myBtn btn-lg" onClick={aboutMe}>
            Learn Even More!
          </button>
        </div>
      </section>
      <div className="fixed-bottom"></div>
      <Footer />
    </>
  );
}
