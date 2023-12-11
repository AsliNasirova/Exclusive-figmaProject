import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layout/Main/mainLayout";
import AboutPage from "./Pages/AboutPage/about";
import Contact from "./Pages/ContactPage/contact";
import Home from "./Pages/HomePage/home";
import Signup from "./Pages/SignUpPage/signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
