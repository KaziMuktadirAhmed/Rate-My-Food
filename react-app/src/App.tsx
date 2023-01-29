import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Topbar from "./Topbar/Topbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Topbar />
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Freakbook</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            &nbsp; &nbsp; Search &nbsp;
            <input placeholder="Search for anything" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarIcons">
            <div className="topbarIconItem">
              Person
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              Chat
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              Notification
              <span className="topbarIconBadge">1</span>
            </div>
            <img src="" alt="" className="topbarImg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
