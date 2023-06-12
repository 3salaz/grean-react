import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TabBar from "./components/TabBar";
import Home from "./Routes/Home";
import Maps from "./Routes/Maps";
import Stats from "./Routes/Stats";
// import LoginForm from './components/Forms/LoginForm';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/maps" element={<Maps />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
      </Routes>
      <TabBar/>
    </div>

    // <div className='bg-[#75B657] w-full'>
    //   <Navbar/>
    //   <main className='w-full flex flex-col md:flex-row items-center justify-center md:my-4'>
    //     {/* <SignIn/> */}
    //     <SignUp/>
    //   </main>
    //   <Tabbar/>
    // </div>
  );
}

export default App;
