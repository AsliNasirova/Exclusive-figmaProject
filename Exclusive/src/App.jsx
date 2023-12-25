import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layout/Main/mainLayout";
import AboutPage from "./Pages/AboutPage/about";
import Contact from "./Pages/ContactPage/contact";
import Home from "./Pages/HomePage/home";
import Signup from "./Pages/SignUpPage/signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from "./Pages/LoginPage/login";

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
