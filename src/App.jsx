import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import AppStyles from "./App.styles";
import { useState } from "react";
import { AppProvider } from "./context/context";
import Test from "./pages/Test";
import DashBoard from "./pages/dashboard.jsx";
import Blog from "./pages/blog";
import FAQ from "./pages/faq";
import Features from "./pages/feaures";
import ContactUs from "./pages/contact us";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import NotFound from "./pages/not found";
import AboutUs from "./pages/about us";
import Results from "./pages/results";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState([]);

  return (
    <AppProvider value={{ isLoading, setIsLoading, url, setUrl }}>
      <AppStyles>
        <Router>
          <Routes>
            <Route element={<Home />} index />
            <Route element={<DashBoard />} path="/dashboard" />
            <Route element={<Results />} path="/result" />
            <Route element={<AboutUs />} path="about" />
            <Route element={<Blog />} path="/blog" />
            <Route element={<FAQ />} path="/faq" />
            <Route element={<Features />} path="/features" />
            <Route element={<ContactUs />} path="/contact-us" />
            <Route element={<Login />} path="/login" />
            <Route element={<SignUp />} path="/sign-up" />
            <Route element={<NotFound />} path="/not-found" />
            <Route element={<Test />} path="/test" />
          </Routes>
        </Router>
      </AppStyles>
    </AppProvider>
  );
}

export default App;
