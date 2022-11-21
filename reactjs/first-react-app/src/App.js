import React from 'react';
import './App.css';
import MyButton from './components/button';
import  About  from './components/about';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Welcom to My App</h2>
      <MyButton />
      <About />
      </header>
    </div>
  );
}

export default App;
