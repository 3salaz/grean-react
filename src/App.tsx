import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import Navbar from './components/Navbar';
import Tabbar from './components/Tabbar';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
// import LoginForm from './components/Forms/LoginForm';


function App() {
  return (
    <div className='bg-[#75B657] w-full'>
      <Navbar/>
      <main className='w-full flex flex-col md:flex-row items-center justify-center md:my-4'>
        <SignIn/>
        <SignUp/>
      </main>
      <Tabbar/>
    </div>
  );
}

export default App;
