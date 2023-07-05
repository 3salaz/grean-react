import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

// Routes
import Account from "./Routes/Account";
import Team from "./Routes/Team";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import Maps from "./Routes/Maps";
import Profile from "./Routes/Profile";

// Components
import Stats from "./components/Stats";
import BottomNav from "./components/Navigation/BottomNav";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SideNav from "./components/Navigation/SideNav";
import TopNav from "./components/Navigation/TopNav";

function App() {
  return (
    <AuthContextProvider>
      <div className="flex min-h-screen flex-col">
        <TopNav />
        <main className="h-full w-full flex">
          <Routes>
            <Route path="/" element={<Profile />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route path="/maps" element={<Maps />}></Route>
            <Route path="/stats" element={<Stats />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </main>
        <SideNav />
        <BottomNav />

        {/* <footer className="bg-slate-800 bottom-0 z-5 fixed w-full">
          <div className="p-2 text-center bg-slate-800">
            <span className="text-white">© 2023 Copyright:</span>
            <Link className="font-semibold pl-1.5 text-[#75B657]" to="/contact">
              Grean
            </Link>
          </div>
        </footer> */}
      </div>
    </AuthContextProvider>
  );
}

export default App;
