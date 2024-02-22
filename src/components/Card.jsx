import "../components/Cards.css";
import { useState, useEffect } from "react";
import Divider from "../assets/divider.svg";
import DividerMobile from "../assets/divider-mobile.svg";

function Card() {
  const [advice, setAdvice] = useState("");
  const [numberid, setNumberid] = useState(0);

  async function Advices() {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    const data = await response.json();
    setAdvice(data.slip.advice);
    setNumberid(data.slip.id);
  }
  useEffect(() => {
    Advices();
  }, []);

  return (
    <div className="card">
      <h5>Advice #{numberid}</h5>
      <h2>"{advice}"</h2>
      <img id="desktop" src={Divider} alt="" />
      <img id="mobile" src={DividerMobile} alt="" />

      <button onClick={Advices} id="spin">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            id="svg"
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  );
}
export default Card;
