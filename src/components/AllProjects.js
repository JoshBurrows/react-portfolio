import { Container } from "react-bootstrap";
import Navigation from "./Navbar";
import "../styles/AllProjects.css";
import QuoteGen from "./ProjectQuoteGen";
import LottoPicker from "./projectLotto";
import ECommerce from "./ProjectEComm";
import ColorGen from "./ProjectColorGen";
import Footer from "./Footer";
import Calc from "./ProjectCalc";

export default function AllProjects() {
  return (
    <section>
      <Navigation />
      <Container className="text-dark">
        <h1 className="text-center">Projects</h1>
        <p className="text-center">
          <small>This website you're viewing was made with React</small>
        </p>
      </Container>

      <Container className="myContainer my-5 d-flex bg-secondary rounded py-5 flex-wrap justify-content-evenly">
        <QuoteGen />
        <LottoPicker />
        <ECommerce />
        <Calc />
        <ColorGen />
      </Container>
      <Footer />
    </section>
  );
}
