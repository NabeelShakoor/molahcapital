import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./App/Layout/Layout.jsx";
import Homepage from "./Components/Homepage/Homepage.jsx";
import Funds from "./Components/Funds/Funds.jsx";
import About from "./Components/About/About.jsx";
import FAQS from "./Components/FAQS/FAQS.jsx";
import Contact from "./Components/Contact/Contact.jsx";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Homepage />
              </Layout>
            }
          ></Route>
          <Route
            path="/funds"
            element={
              <Layout>
                <Funds />
              </Layout>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          ></Route>
          <Route
            path="/faq"
            element={
              <Layout>
                <FAQS />
              </Layout>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
