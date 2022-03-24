import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import "../styles/AllProjects.css";
import QuoteGen from "./ProjectQuoteGen";
import LottoPicker from "./projectLotto";
import ECommerce from "./ProjectEComm";
import ColorGen from "./ProjectColorGen";
import Footer from "./Footer";

export default function AllProjects() {
  return (
    <>
      <Navbar />
      <Container className="mt-5 text-light pt-5">
        <h1 className="text-center">&#171;Projects&#187;</h1>
        <p className="text-center">
          <small>
            {"{"}This website you're viewing was made with React{"}"}
          </small>
        </p>
      </Container>

      <Container className="myContainer my-5 d-flex bg-secondary rounded py-5 flex-wrap justify-content-evenly">
        <QuoteGen />
        <LottoPicker />
        <ECommerce />
        <ColorGen />
      </Container>
      <Footer />
    </>
  );
}
