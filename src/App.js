import logo from "./logo.svg";
import "./App.css";
import Canvas from "./CanvasPart1";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/3" element={<Canvas />} />
    </Routes>
  );
}

export default App;
