import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tabbar from "./components/Tabbar";
import Home from "./Routes/Home";
import Maps from "./Routes/Maps";
import Stats from "./Routes/Stats";
import Login from "./Routes/Login";
import SignUp from "./components/Auth/SignUp";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar/>
      <main className="flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/maps" element={<Maps />}></Route>
          <Route path="/stats" element={<Stats />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
      </main>
      <footer className="bg-[#75B657] z-5 fixed bottom-0 w-full">
        <Tabbar/>
      </footer>
    </div>
  );
}

export default App;
