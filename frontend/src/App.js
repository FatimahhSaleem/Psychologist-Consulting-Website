import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import About from "./components/About";
import Contact from "./components/Contact";
import Goals from "./components/Goals";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

import Login from "./components/Patients/Login";
import SignUp from "./components/Patients/SignUp";
import PatientHome from "./components/Patients/PatientHome";
import PatientProfile from "./components/Patients/PatientProfile";

import PsychologistLogin from "./components/Psychologist/PsychologistLogin";
import PsychologistHome from "./components/Psychologist/PsychologistHome";
import PsychologistProfile from "./components/Psychologist/PsychologistProfile";

function App() {
  const [user, setUser] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (reload === true) {
      setReload(false);
    }
    if (localStorage.getItem("token")) {
      const authToken = localStorage.getItem("token");
      const decoded = jwtDecode(authToken);
      setUser(decoded.role);
    }
  }, [reload]);
  const refresh = () => {
    setReload(true);
  };

  return (
    <>
      <Router>
        <NavBar refresh={refresh} load={reload} />
        {!localStorage.getItem("token") && (
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/our-goals" element={<Goals />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route
              exact
              path="/login"
              element={<Login refresh={refresh} />}
            ></Route>
            <Route
              exact
              path="/psychologistLogin"
              element={<PsychologistLogin refresh={refresh} />}
            ></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
        {localStorage.getItem("token") && user === "patient" && (
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/our-goals" element={<Goals />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/home" element={<PatientHome />}></Route>
            <Route exact path="/profile" element={<PatientProfile />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
        {localStorage.getItem("token") && user === "psychologist" && (
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/our-goals" element={<Goals />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route
              exact
              path="/psychologist/home"
              element={<PsychologistHome />}
            ></Route>
            <Route
              exact
              path="/profile"
              element={<PsychologistProfile />}
            ></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}

        <Footer />
      </Router>
    </>
  );
}

export default App;
