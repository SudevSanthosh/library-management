import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import StudentList from "./pages/StudentList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/welcomePage" element={<WelcomePage/>} />
        <Route path="/studentList" element={<StudentList/>} />
    </Routes>
    </Router>
  );
}

export default App;
