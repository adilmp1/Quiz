import "./App.css";
import { useState } from "react";
import Questions from "./Questions";
import { Score } from "./Score";
import { Name } from "./Name";
const TotalQns = 5;
const questions = [
  {
    question: "1. Who is the first prime minister of India",
    ans1: "Mahatma Gandhi",
    ans2: "Jawaharlal Nehru",
    ans3: "B.R. Ambedkar",
    ans4: "Gopal Krishna Gokhale",
    correct: "Jawaharlal Nehru",
  },
  {
    question: "2. What is the capital city of India",
    ans1: "New Delhi",
    ans2: "Mumbai",
    ans3: "Kolkata",
    ans4: "Chennai",
    correct: "New Delhi",
  },
  {
    question: "3. Who is popularly known as the “Iron Man” of India",
    ans1: "Lal Bahadur Shastri",
    ans2: "Sardar Vallabh Bhai Patel",
    ans3: "Mahatma Gandhi",
    ans4: "Dr. B.R Ambedkar",
    correct: "Sardar Vallabh Bhai Patel",
  },
  {
    question: "4. Which is the national sport of India",
    ans1: "Cricket",
    ans2: "Hockey",
    ans3: "Kabaddi",
    ans4: "Football",
    correct: "Hockey",
  },
  {
    question: "5. Where is Taj Mahal located in India",
    ans1: "New Delhi ",
    ans2: "Kolkata",
    ans3: "Agra",
    ans4: "Lucknow",
    correct: "Agra",
  },
];
function App() {
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState();
  const [score, setScore] = useState(0);
  const [val, setVal] = useState(0);
  const [wrong, setWrong] = useState([]);
  const [name, setName] = useState();
  if (val === 0) {
    return (
      <div className="App">
        <div className="question-container">
          <Name name={name} setName={setName} setVal={setVal} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="question-container">
          {index !== 5 ? (
            <Questions
              questions={questions}
              index={index}
              setIndex={setIndex}
              chosen={chosen}
              setChosen={setChosen}
              score={score}
              setScore={setScore}
              wrong={wrong}
              setWrong={setWrong}
            />
          ) : (
            <Score score={score} TotalQns={TotalQns} name={name} wrong={wrong} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
