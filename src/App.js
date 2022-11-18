import "./styles.css";
import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

export default function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section>
          {questions.map((question) => {
            return <Questions key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}
