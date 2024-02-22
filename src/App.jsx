import "./App.css";
import Card from "./components/Card.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Advice Generator";
  }, []);
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
