import AboutUs from "./AboutUS/AboutUs";
import "./App.css";
import ContactUs from "./ContactUs/ContactUs";
import Homepage from "./HomePage/Homepage";
import Error from "./Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Navbar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
