import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import StudentList from "./pages/StudentList";
import MyProfile from "./pages/MyProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/welcomePage"
          element={
            <ProtectedRoute>
              <WelcomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/studentList"
          element={
            <ProtectedRoute>
              <StudentList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myProfile"
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

function ProtectedRoute(props) {
  const userAuth = JSON.parse(localStorage.getItem("loggedInUser"));

  if (userAuth && userAuth.name.length > 0 && userAuth.email) {
    return props.children;
  } else {
    return <Navigate to="/" />;
  }
}
