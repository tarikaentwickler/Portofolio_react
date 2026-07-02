import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import "./types/analytics.ts"; // Google Analytics types

createRoot(document.getElementById("root")!).render(<App />);