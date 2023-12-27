import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

// Routes
import Profile from "./routes/Profile";
import Home from "./routes/Home";

// Components
import Navbar from "./components/Semantic/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";
import Admin from "./components/Admin/Admin";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Services from "./routes/Services";
import { useCycle, motion } from "framer-motion";
import AccountTab from "./components/Tabs/AccountTab";
import MapTab from "./components/Tabs/MapTab";
import StatsTab from "./components/Tabs/StatsTab";
import { useState } from "react";
import Account from "./routes/Account";
import Stats from "./routes/Stats";

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <main className="absolute top-[8svh] w-full bg-grean">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </main>
    </AuthContextProvider>
  );
}

export default App;
