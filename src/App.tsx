import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Home from "./Routes/Home";
import Maps from "./Routes/Maps";
import Stats from "./Routes/Stats";
import Login from "./Routes/Login";
import SignUp from "./components/Auth/SignUp";
import BottomNav from "./components/Navigation/BottomNav";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar/>
      <main className="flex flex-col items-center justify-center h-full">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/maps" element={<Maps />}></Route>
          <Route path="/stats" element={<Stats />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
      </main>
      {/* <footer className="bg-[#75B657] z-5 fixed bottom-0 w-full h-16"> */}
        {/* <Tabbar/> */}
        <BottomNav/>

    </div>
  );
}

export default App;
