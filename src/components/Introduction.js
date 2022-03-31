import { useNavigate } from "react-router-dom";
import "../styles/Introduction.css";
import "animate.css";
import vector from "../images/vector-artwork.jpg";
export default function Introduction() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/projects");
  };
  return (
    <>
      <section className="introSection d-flex align-items-center justify-content-evenly flex-wrap">
        <div className="intro-card animate__animated animate__backInDown">
          <div className="intro-card-text">
            <h1 className="animate__animated animate__backInRight">
              Hello, Im <hr />
              <span>Josh Burrows</span>
            </h1>
            <p className="pt-1 animate__animated animate__backInLeft">
              I love learning, and developing new things
            </p>
          </div>
          <button
            onClick={handleClick}
            className="myBtn animate__animated animate__backInUp"
          >
            <strong>My Work</strong>
          </button>
        </div>
        <div className="intro-img animate__animated animate__backInUp">
          <img src={vector} />
        </div>
      </section>
    </>
  );
}
