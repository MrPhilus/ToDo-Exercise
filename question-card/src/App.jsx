import { useState } from "react";
import "./App.css";

import QuestionsAsked from "./components/QuestionsAsked";

const questions = [
  {
    id: 1,
    text: "1. What is life?",
    response: "fyguhijiouiyutryuuuy",
    completed: false,
  },
  {
    id: 2,
    text: "2. Why are we here?",
    response: "fyguhijiouiyutryuuuy",
    completed: false,
  },
  {
    id: 3,
    text: "3. Are we alone?",
    response: "qtwieoqeueujejieevuevnuvn uihvuheviuwo",
    completed: false,
  },
  { id: 4, text: "4. What comes next?", response: "ilkev", completed: false },
  {
    id: 5,
    text: "5. Are you happy?",
    response: "nbev isuebe isuevbu iow",
    completed: false,
  },
];

function App() {
  const [question, setQuestion] = useState(questions);

  function toggleCompleted(taskId) {
    const markedDone = questions.map((item) =>
      item.id === taskId ? { ...item, completed: !item.completed } : item
    );
    setQuestion(markedDone);
  }
  return (
    <div className="App">
      {question.map((item, index) => {
        return (
          <QuestionsAsked
            key={index}
            {...item}
            onClick={() => toggleCompleted(item.id)}
          />
        );
      })}
    </div>
  );
}

export default App;
