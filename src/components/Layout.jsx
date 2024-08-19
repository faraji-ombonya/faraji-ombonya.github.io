import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="relative flex w-full flex-col text-left">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
