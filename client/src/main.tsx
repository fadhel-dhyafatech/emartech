import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Authnetication-Screens/login.tsx";
import { TestComponent } from "./components/TestComponent.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <TestComponent/>
  </BrowserRouter>
);
