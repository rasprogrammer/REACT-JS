import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Help from "./components/Help";

import SideProject from "./components/SideProject";
import CompanyProject from "./components/CompanyProject";

function App() {
  return (
    <>
      <h2>React Routing</h2>
      <hr />
      <br />

      <Router>
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/about/Rajiv">About</Link> |{" "}
          <Link to="/contact">Contact</Link> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          <Link to="/settings">Settings</Link> | <Link to="/help">Help</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/:name" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} >
            <Route path="sideProject" element={<SideProject />} />
            <Route path="companyProject" element={<CompanyProject />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
