import "./App.css";
import Routes from "./routes.js";
import NavBar from "./components/splash/nav_bar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
