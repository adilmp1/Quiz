export default function Questions(props) {
    const questions = props.questions;
    const index = props.index;
    const setIndex = props.setIndex;
    const score = props.score;
    const setScore = props.setScore;
    const chosen = props.chosen;
    const setChosen = props.setChosen;
    return (
    <div>
      <h2>{questions[index].question}</h2>
      <div className="answers-with-submit">
        <div className="answers">
          <button
            onClick={() => {
              setChosen(questions[index].ans1);
            }}
            className="answer"
          >
            {questions[index].ans1}
          </button>
          <button
            onClick={() => {
              setChosen(questions[index].ans2);
            }}
            className="answer"
          >
            {questions[index].ans2}
          </button>
          <button
            onClick={() => {
              setChosen(questions[index].ans3);
            }}
            className="answer"
          >
            {questions[index].ans3}
          </button>
          <button
            onClick={() => {
              setChosen(questions[index].ans4);
            }}
            className="answer"
          >
            {questions[index].ans4}
          </button>
        </div>
        <button
          onClick={() => {
            {
              const ans1 = questions[index].ans1;  
              const ans2 = questions[index].ans2;  
              const ans3 = questions[index].ans3;  
              const ans4 = questions[index].ans4;  
              if(chosen!=ans1 && chosen!=ans2 && chosen!=ans3 && chosen!=ans3)
              {
                alert('Please Choose one option')
              }
              else
              {
                if (questions[index].correct === chosen) {
                  setScore(score + 1);
                  }
                setIndex(index + 1);
              }
            }
          }}
          className="submit"
        >
          submit
        </button>
      </div>
    </div>
  );
}
