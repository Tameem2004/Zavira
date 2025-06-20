
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full px-8 py-4 flex items-center justify-between bg-white shadow-md sticky top-0 z-50">
      <Navbar />
    </header>
  );
}