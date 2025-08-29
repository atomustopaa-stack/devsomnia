import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} Devsomnia
        </div>
      </footer>
    </div>
  );
}
