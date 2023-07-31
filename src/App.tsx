import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

// Routes
import Profile from "./routes/Profile";
import Landing from "./routes/Landing";
import Settings from "./routes/Settings";

// Components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <AuthContextProvider>
      {/* <Preloader/> */}
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
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
