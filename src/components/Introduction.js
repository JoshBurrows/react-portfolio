import { useNavigate } from "react-router-dom";
import "../styles/Introduction.css";

export default function Introduction() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/projects");
  };
  return (
    <section className="text-light vh-100 d-flex align-items-center justify-content-center">
      <div className="container p-5">
        <h1>Hello, Im Josh Burrows</h1>
        <p>I have a passion for learning, and developing new things</p>
        <button onClick={handleClick} className="my-5 myBtn">
          <strong>My Work</strong>
        </button>
      </div>
    </section>
  );
}
