import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import Temp from "./pages/temp/Temp";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />}>
        <Route path="good" element={<p>This is good</p>} />
        <Route path="ok" element={<p>holo is ok</p>} />
      </Route>
      <Route path="/temp" element={<Temp />}></Route>
      <Route path="/search" element={<Search />}></Route>
    </Routes>
  );
}

export default App;
