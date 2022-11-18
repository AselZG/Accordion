import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export default function Question({ title, info }) {
  const [showInfo, setShow] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShow(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}
