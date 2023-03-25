import React, { useState } from "react";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   function increase() {
//     setCount(count + 1);
//   }
//   function decrease() {
//     setCount(count - 1);
//   }
//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>
//   );
// }

// export default App;

// react hook challange
function App() {
  setInterval(update, 1000);
  let now = new Date().toLocaleTimeString();
  const [time, Settime] = useState(now);

  function update() {
    let newTime = new Date().toLocaleTimeString();
    Settime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
