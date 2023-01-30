import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import Temp from "./pages/temp/Temp";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Temp" element={<Temp />}></Route>
      <Route path="/Search" element={<Search />}></Route>
    </Routes>
  );
}

export default App;
