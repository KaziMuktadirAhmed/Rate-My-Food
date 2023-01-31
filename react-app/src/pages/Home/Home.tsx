import { Outlet } from "react-router-dom";
import Map from "../../components/Sidebar/Map/Map";

function Home() {
  return (
    <div>
      <Outlet />
      <Map />
    </div>
  );
}

export default Home;
