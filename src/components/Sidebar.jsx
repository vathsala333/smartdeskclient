import { Home, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 bg-white shadow-lg h-screen p-4">
      <h1 className="text-xl font-bold mb-8">SmartDesk AI</h1>

      <nav className="space-y-4">
        <Link className="flex gap-2" to="/dashboard">
          <Home size={18} /> Dashboard
        </Link>

        <Link className="flex gap-2" to="/dashboard">
          <Ticket size={18} /> Tickets
        </Link>
      </nav>
    </div>
  );
}
