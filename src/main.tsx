import { createRoot } from "react-dom/client";
import "./app.css";
import AppRouter from "./routes/AppRouter";
createRoot(document.getElementById("root")!).render(<AppRouter />);
