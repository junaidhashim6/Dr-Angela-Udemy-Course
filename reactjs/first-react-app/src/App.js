import React from 'react';
import './App.css';
import MyButton from './components/button';
import  About  from './components/about';
import AdminPanel from './components/admin';
import LoginForm from './components/user';
const isLoggedIn =false;
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Welcom to My App</h2>
      <MyButton />
      <About />
      <div>
      {isLoggedIn ? (
      <AdminPanel />
      ) : (
      <LoginForm />
  )}
     </div>
      </header>
    </div>
  );
}

export default App;
