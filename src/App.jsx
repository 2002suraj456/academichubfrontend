import NavBar from "./layouts/NavBar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Outlet/>
    </>
  );
}

export default App;
