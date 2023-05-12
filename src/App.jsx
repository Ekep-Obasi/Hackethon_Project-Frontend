import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import AppStyles from "./App.styles";
import { useState } from "react";
import { AppProvider } from "./context/context";
import Test from "./pages/Test";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppProvider value={{ isLoading, setIsLoading }}>
      <AppStyles>
        <Router>
          <Routes>
            <Route element={<Home />} index />
            <Route element={<Test />} path="/test" />
          </Routes>
        </Router>
      </AppStyles>
    </AppProvider>
  );
}

export default App;
