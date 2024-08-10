import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ScrollProvider from "./context/ScrollContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ScrollProvider>
    <App />
  </ScrollProvider>
);
