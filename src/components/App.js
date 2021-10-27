import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
