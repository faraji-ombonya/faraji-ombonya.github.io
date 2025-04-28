import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-zinc-50 dark:bg-black">
      <div className="bg-white dark:bg-zinc-900 text-left max-w-7xl mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
