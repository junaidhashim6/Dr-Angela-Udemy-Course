import "./App.css";
import Card from "./components/Card";
import emoji from "./emoji";
function App() {
  return (
    <>
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>
        <dl className="dictionary">
          {emoji.map(function (emoji) {
            return (
              <Card
                key={emoji.id}
                emoji={emoji.emoji}
                name={emoji.name}
                detail={emoji.meaning}
              />
              
            );
          })}
        </dl>
      </div>
      );
    </>
  );
}

export default App;
