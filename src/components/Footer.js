import "../styles/Footer.css";
import {
  FaGithubSquare,
  FaLinkedinIn,
  FaMailBulk,
  FaPhoneSquareAlt,
  FaLocationArrow,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="row opacity-75">
      <div className="col-md-4">
        <div className="footer-left container pl-2 pt-2">
          <h5>
            <a href="/">Josh Burrows Web Developer</a>
          </h5>
          <p>You can see more at GitHub & LinkedIn or contact me via e-mail</p>
        </div>
      </div>
      <div className="col-md-4 text-center">
        <div className="footer-links d-flex pt-2 justify-content-around">
          <a
            className="text-white rounded p-2"
            href="https://github.com/JoshBurrows"
          >
            <FaGithubSquare />
            <br />
            <small>GitHub</small>
          </a>
          <a
            className="text-white rounded p-2"
            href="https://www.linkedin.com/in/jburrowsdev"
          >
            <FaLinkedinIn />
            <br />
            <small>LinkedIn</small>
          </a>
          <a className="text-white rounded p-2" href="/contact">
            <FaMailBulk />
            <br />
            <small>Email</small>
          </a>
        </div>
        <div className="footer-phone d-flex align-items-center justify-content-center pt-2">
          <FaPhoneSquareAlt />
          <p>(936)-933-6263</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer-location container pt-2 d-flex align-items-center justify-content-center">
          <FaLocationArrow />

          <p>Livingston, TX.</p>
        </div>
      </div>
      <div className="text-center pb-1">
        © 2020 Copyright:
        <a href="https://www.joshuaburrows.com">http://www.joshuaburrows.com</a>
      </div>
    </footer>
  );
}
