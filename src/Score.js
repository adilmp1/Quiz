
export const Score = (props) => {
    const {score,TotalQns,name} = props;
  return (
    <div>
        Hey {name} You have scored {score}/{TotalQns}
    </div>
  )
}
