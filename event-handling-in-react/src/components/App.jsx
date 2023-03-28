import React, {useState} from "react";

function App() {

     //changing style property with state 
  // const [header, setHeader] = useState("Hello");
  // const [mouseover, setMouseover]= useState(false)
  // function controllHeader(){
  //   setHeader("clicked!")
  // }
  // function black(){
  //   setMouseover(true);
  // }
  // function white(){
  //   setMouseover(false)
  // }
  // return (
  //   <div className="container">
  //     <h1>{header}</h1>
  //     <input type="text" placeholder="What's your name?" />
  //     <button style={{backgroundColor: mouseover? "black": "white"}} 
  //     onClick={controllHeader} onMouseOver={black} onMouseOut={white}>Submit</button>
  //   </div>
  // );

    //Forms in react
    const [name, setName] = useState()
    const [heading, setHeading] = useState()
    function handleForm(e){
      setName(e.target.value);
    }
    function handleClick(e){
      setHeading(name)
      e.preventDefault();
    }
  return(
    <div className="container">
    <h1>Hello {heading}</h1>
    <form >
    <input type="text" placeholder="What's your name?" onChange={handleForm} value={name}/>
    <button onClick={handleClick}>Submit</button>
    </form>
    </div>
  );
}

export default App;
