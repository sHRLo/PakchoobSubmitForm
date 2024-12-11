import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/Login/Login.jsx';
import Submit from "./components/Submit/Submit.jsx";
import Home from "./components/Home/Home.jsx";
// import backgroundImage from './assets/0011.jpg';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} /><Route/>
                <Route path="/submit" element={<Submit/>} /><Route/>
                <Route path="/home" element={<Home/>} /><Route/>
            </Routes>
        </BrowserRouter>
        // <div className='text-white h-[100vh] flex items-center justify-center bg-cover' style={{'backgroundImage': "url('./src/assets/0011.jpg')" }}>
        //     <Login />
        // </div>
    )
}
export default App;