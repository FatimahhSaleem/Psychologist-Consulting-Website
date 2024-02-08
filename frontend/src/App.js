import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Goals from "./components/Goals";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/our-goals" element={<Goals />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
