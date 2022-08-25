import './App.css';
import Home from './components/Home.js';
import { ToastContainer} from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import Main from './components/Main.js';


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/home" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
