import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-gray-300 m-0 p-0 container">
      <div className=" bg-white relative container flex w-full flex-col text-left p-0">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
