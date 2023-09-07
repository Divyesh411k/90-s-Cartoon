import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Cartoon from "./components/Cartoon";
import Games from "./components/Games";

function App() {
  return (

    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Cartoon/>} />
        <Route path="/games" element={<Games/>} />
      </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;
