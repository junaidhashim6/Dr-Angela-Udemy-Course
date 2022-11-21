import './App.css';
const user = {
  name: "junaid",
  desig:  "lead",
  age:26
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Name of the user is {user.name}</p>
        <p>He is {user.age} years old</p>
        <p>He works as {user.desig}</p>
      </header>
    </div>
  );
}

export default App;
