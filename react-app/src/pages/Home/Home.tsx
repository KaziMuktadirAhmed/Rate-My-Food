import { Outlet } from "react-router-dom";
import Map from "../../components/Sidebar/Map/Map";

function Home() {
  return (
    <div>
      <Outlet />
      <Map />
      ekhane kisu nai. goto /search route to see currently implemented contents.
    </div>
  );
}

export default Home;
