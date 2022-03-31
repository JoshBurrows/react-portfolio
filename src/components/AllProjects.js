import { Container } from "react-bootstrap";
import Navigation from "./Navbar";
import "../styles/AllProjects.css";
import QuoteGen from "./ProjectQuoteGen";
import LottoPicker from "./projectLotto";
import ECommerce from "./ProjectEComm";
import ColorGen from "./ProjectColorGen";
import Footer from "./Footer";
import Calc from "./ProjectCalc";
import "animate.css";

export default function AllProjects() {
  return (
    <>
      <Navigation />
      <section className="allProjectsSection">
        <h1 className="projectHeader animate__animated animate__fadeInDown">
          Projects
        </h1>
        <p className="projectHeaderText">
          This website you're viewing was made with React and a few npm
          libraries. It uses bootstrap for some styling, as well as, custom css.
          Emailjs handles the contact form, AnimateCSS handles the animations.
          It's using React-Router-Dom to route you to the different pages, and
          React-icons gives us..well..the icons. Deployment is done utilizing
          GH-pages.
        </p>

        <Container className="all-projects-container rounded d-flex flex-wrap justify-content-evenly">
          <QuoteGen />
          <LottoPicker />
          <ECommerce />
          <Calc />
          <ColorGen />
        </Container>
      </section>
      <Footer />
    </>
  );
}
