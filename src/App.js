import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Data from './Data/Dishes/Dishes';
import Reserve from './Components/Reserve/Reserve';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Components/About/About';
function App() {
  


  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/" element={<Home Data = {Data}/>} />
        <Route path="/booking" element={<Reserve />} />
          <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
