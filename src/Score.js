import './Score.css'
export const Score = (props) => {
    const {score,TotalQns,name,wrong} = props;
  if(score===TotalQns)
  {
    return (
      <div className='score'>
          <h4>Excellent {name}, You have corrected {score}/{TotalQns}</h4>
          <div className='wrong-items'>
            {wrong.map((wrongItem)=>{
              return(
                <>
                  <div className='wrong-item'>
                    <div>Question No : {wrongItem.qNo}</div>
                    <div>Your Answer : {wrongItem.yourAns}</div>
                    <div>Correct Answer : {wrongItem.correctAns}</div>
                  </div>
                </>
              )
            })}
          </div>
      </div>
    )
  }
  else if(score>=3)
  {
    return (
      <div className='score'>
          <h4>Good {name}, You have corrected {score}/{TotalQns}</h4>
          <div className='wrong-items'>
            {wrong.map((wrongItem)=>{
              return(
                <>
                  <div className='wrong-item'>
                    <div>Question No : {wrongItem.qNo}</div>
                    <div>Your Answer : {wrongItem.yourAns}</div>
                    <div>Correct Answer : {wrongItem.correctAns}</div>
                  </div>
                </>
              )
            })}
          </div>
      </div>
    )
  }
  else if(score>=1)
  {
    return (
      <div className='score'>
          <h4>Below Average {name}, You have corrected {score}/{TotalQns}</h4>
          <div className='wrong-items'>
            {wrong.map((wrongItem)=>{
              return(
                <>
                  <div className='wrong-item'>
                    <div>Question No : {wrongItem.qNo}</div>
                    <div>Your Answer : {wrongItem.yourAns}</div>
                    <div>Correct Answer : {wrongItem.correctAns}</div>
                  </div>
                </>
              )
            })}
          </div>
      </div>
    )
  }
  else
  {
    return (
      <div className='score'>
          <h4>{name}, You are a looser, You have corrected {score}/{TotalQns}</h4>
          <div className='wrong-items'>
            {wrong.map((wrongItem)=>{
              return(
                <>
                  <div className='wrong-item'>
                    <div>Question No : {wrongItem.qNo}</div>
                    <div>Your Answer : {wrongItem.yourAns}</div>
                    <div>Correct Answer : {wrongItem.correctAns}</div>
                  </div>
                </>
              )
            })}
          </div>
      </div>
    )
  }
  
  
}
