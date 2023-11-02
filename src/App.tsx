import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

// Routes
import Profile from "./routes/Profile";
import Landing from "./routes/Landing";

// Components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
