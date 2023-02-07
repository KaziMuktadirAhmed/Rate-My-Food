// views/topbar.tsx
import React, { useState } from "react";
import model, { ITopbar } from "../models/topbar";
import {
  handleSearch,
  handleLogin,
  handleSignup,
  handleLogout,
} from "../controllers/topbar";

const Topbar = () => {
  const [state, setState] = useState<ITopbar>(model);

  return (
    <div className="topbar">
      <div className="logo">My App</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="search-container">
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={state.searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {state.isLoggedIn ? (
        <div className="user-container">
          <img
            src={state.userImageUrl}
            alt="User"
            onClick={() => alert("User dashboard")}
          />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="auth-container">
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Signup</button>
        </div>
      )}
    </div>
  );
};

export default Topbar;
