import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./components/notes";

function App() {
  return (
    <>
      <Header />
      {notes.map((item) => (
        <Note key={item.key} title={item.title} content={item.content} />
      ))}
      <Footer />
    </>
  );
}

export default App;
