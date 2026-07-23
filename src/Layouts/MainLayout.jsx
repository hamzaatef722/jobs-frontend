import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div>
        <NavBar />
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default MainLayout;
