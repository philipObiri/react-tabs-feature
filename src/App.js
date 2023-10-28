import {useState, useEffect} from "react";

export default function App(){
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice(){
  const response = await fetch ("https://api.adviceslip.com/advice")
  const data = await response.json() 
  setAdvice(data.slip.advice);
  setCount((c) => c+1);
 }
 
 useEffect(function(){
  getAdvice();
 },[]);

  return (
    <div className="container" >
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button><br/>
      <Message count={count}></Message>
    </div>
  )

}


function Message({count}){
return(
 <p> You have read <strong>{count}</strong> pieces of advice</p>
)
}