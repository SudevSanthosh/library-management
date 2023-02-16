import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/welcomePage" element={<WelcomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
