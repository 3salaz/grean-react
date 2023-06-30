import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Home from "./Routes/Home";
import Maps from "./Routes/Maps";
import Stats from "./Routes/Stats";
import Login from "./Routes/Login";
import SignUp from "./components/Auth/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./Routes/Account";

function App() {
  return (
    <AuthContextProvider>
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="h-full w-full">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/account" element={<Account/>}></Route>
          <Route path="/maps" element={<Maps />}></Route>
          <Route path="/stats" element={<Stats />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
      </div>
      <footer className="bg-[#75B657] bottom-0 z-5 fixed w-full h-16">
          {/* <!--Copyright section--> */}
          <div>Tabs</div>
          <div className="p-2 text-center bg-slate-800">
            <span className="text-[#75B657]">© 2023 Copyright:</span>
            <a
              className="font-semibold pl-px dark:text-white"
              href="https://tailwind-elements.com/"
            >
              Grean
            </a>
          </div>
      </footer>
    </div>
    </AuthContextProvider>
  );
}

export default App;
