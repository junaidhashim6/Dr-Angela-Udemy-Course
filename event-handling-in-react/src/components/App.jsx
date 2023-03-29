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

    //Using Forms to mangage state
  //   const [name, setName] = useState()
  //   const [heading, setHeading] = useState()
  //   function handleForm(e){
  //     setName(e.target.value);
  //   }
  //   function handleClick(e){
  //     setHeading(name)
  //     e.preventDefault();
  //   }
  // return(
  //   <div className="container">
  //   <h1>Hello {heading}</h1>
  //   <form >
  //   <input type="text" placeholder="What's your name?" onChange={handleForm} value={name}/>
  //   <button onClick={handleClick}>Submit</button>
  //   </form>
  //   </div>
  // );


          // complex states

        const [fname, setFname] =useState("");
        const [lname, setLname] = useState("");
        function handleFname(e){
          const firstName = e.target.value;
          setFname(firstName);
        }
        function handleLname(e){
          const LastName = e.target.value;
          setLname(LastName);
        }
        return(
          <div className="container">
            <h1>Hello {fname} {lname}</h1>
            <form>
              <input type="text" placeholder="First Nmae" onChange={handleFname} value={fname}/>
              <input type="text" placeholder="Last Nmae" onChange={handleLname} value={lname}/>
              <button type="submit">Submit</button>
            </form>
          </div>
        );
}

export default App;
