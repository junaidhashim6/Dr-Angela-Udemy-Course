import React, {useState} from "react";

function App() {
  const [header, setHeader] = useState("Hello g");
  const [mouseover, setMouseover]= useState(false)
  function controllHeader(){
    setHeader("clicked!")
  }
  function black(){
    setMouseover(true);
  }
  function white(){
    setMouseover(false)
  }
  return (
    <div className="container">
      <h1>{header}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: mouseover? "black": "white"}} 
      onClick={controllHeader} onMouseOver={black} onMouseOut={white}>Submit</button>
    </div>
  );
}

export default App;
