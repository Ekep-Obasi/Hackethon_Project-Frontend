import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SkeletonTheme color="#D9D9D9">
    <App />
  </SkeletonTheme>
);
