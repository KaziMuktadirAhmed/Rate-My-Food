import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Outlet />
      Home
    </div>
  );
}

export default Home;
