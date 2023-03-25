import React from "react";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
const isRegisterd = false;

function App() {
  return (
    <div className="container">
      {isRegisterd? <Login/>: <Register/>}
    </div>
  );

}

export default App;
