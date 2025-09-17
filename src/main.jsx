import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import "./styles/themes.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
