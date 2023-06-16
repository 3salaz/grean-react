import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tabbar from "./components/Tabbar";
import Home from "./Routes/Home";
import Maps from "./Routes/Maps";
import Stats from "./Routes/Stats";
import Login from "./Routes/Login";
// import LoginForm from './components/Forms/LoginForm';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <Navbar/>
      </header>
      <main className="flex flex-col flex-1 items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/maps" element={<Maps />}></Route>
          <Route path="/stats" element={<Stats />}></Route>
          <Route path="/login" element={<Login />}></Route>

        </Routes>
      </main>
      <footer className="bg-green-300 z-20">
        <Tabbar/>
      </footer>
    </div>
  );
}

export default App;
