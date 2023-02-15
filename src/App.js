import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
      <Link to="/" style={{ padding: 5 }}>
        Home
      </Link>
      <Link to="/page2" style={{ padding: 5 }}>
        Page 2
      </Link>
    </Router>
  );
}

export default App;
