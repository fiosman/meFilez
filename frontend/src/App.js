import "./App.css";
import Splash from "./components/splash/splash";
import NavBar from "react-bootstrap/Navbar";

function App() {
  return (
    <div>
      <NavBar>
        <NavBar.Brand>
          <img src="/logo.png" className="logo" />
        </NavBar.Brand>
      </NavBar>
      <Splash />
    </div>
  );
}

export default App;
