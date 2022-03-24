import "../styles/Footer.css";
import { FaGithubSquare, FaLinkedinIn, FaMailBulk } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="page-footer text-secondary pt-2">
      <div className="iconContainer container-fluid d-flex justify-content-around">
        <a href="https://github.com/JoshBurrows">
          <FaGithubSquare />
        </a>
        <a href="https://www.linkedin.com/in/jburrowsdev">
          <FaLinkedinIn />
        </a>
        <a href="/contact">
          <FaMailBulk />
        </a>
      </div>

      <div className="footer-copyright text-center pb-3">
        © 2020 Copyright:
        <a href="https://www.joshuaburrows.com"> joshuaburrows.com</a>
      </div>
    </footer>
  );
}
