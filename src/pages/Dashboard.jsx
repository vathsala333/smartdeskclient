import { useEffect, useState, useCallback } from "react";
import api from "../api";
import { logoutUser } from "../api";


export default function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState("");

  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const limit = 5;

  // ======================================================
  // LOAD TICKETS (SAFE + PAGINATED)
  // ======================================================
  const load = useCallback(async (p = 1) => {
    try {
      setLoading(true);

      const res = await api.get("/tickets", {
        params: { page: p, limit }
      });

      const data = res.data || {};

      setTickets(Array.isArray(data.tickets) ? data.tickets : []);
      setPage(data.page || 1);
      setPages(data.pages || 1);

    } catch (err) {
      console.error("Load tickets failed:", err);
      setTickets([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // ======================================================
  // CREATE
  // ======================================================
  const createTicket = async () => {
    if (!title.trim()) return;

    try {
      setLoading(true);

      await api.post("/tickets", { title });

      setTitle("");
      await load(1); // always refresh first page

    } catch (err) {
      console.error(err);
    }
  };

  // ======================================================
  // DELETE
  // ======================================================
  const deleteTicket = async (id) => {
    try {
      setLoading(true);

      await api.delete(`/tickets/${id}`);
      await load(page);

    } catch (err) {
      console.error(err);
    }
  };

  // ======================================================
  // SEND MESSAGE
  // ======================================================
  const sendMessage = async (id, text) => {
    if (!text.trim()) return;

    try {
      setLoading(true);

      await api.put(`/tickets/${id}/message`, { text });
      await load(page);

    } catch (err) {
      console.error(err);
    }
  };

  // ======================================================
  // INITIAL LOAD
  // ======================================================
  useEffect(() => {
    load(1);
  }, [load]);

  // ======================================================
  // UI
  // ======================================================
  return (
    <div className="p-8 bg-gray-100 min-h-screen">

   <div className="flex justify-between items-center mb-6">
  <h1 className="text-2xl font-bold">SmartDesk Dashboard</h1>

  <button
    onClick={logoutUser}
    className="bg-red-500 text-white px-4 py-2 rounded text-sm"
  >
    Logout
  </button>
</div>


      {/* ======================
          SPINNER
      ====================== */}
      {loading && (
        <div className="mb-4 text-blue-600 font-semibold">
          Loading...
        </div>
      )}

      {/* ======================
          CREATE
      ====================== */}
      <div className="flex gap-3 mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 flex-1 rounded"
          placeholder="Describe issue..."
        />

        <button
          onClick={createTicket}
          className="bg-blue-600 text-white px-5 rounded"
        >
          Submit
        </button>
      </div>

      {/* ======================
          LIST
      ====================== */}
      <div className="grid gap-4">

        {!loading && tickets.length === 0 && (
          <div className="text-gray-500">No tickets yet</div>
        )}

        {tickets.map((t) => (
          <div key={t._id} className="bg-white p-4 rounded shadow">

            {/* header */}
            <div className="flex justify-between">
              <h3 className="font-semibold">{t.title}</h3>

              <button
                onClick={() => deleteTicket(t._id)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>
            </div>

            <p className="text-sm mt-2">Status: {t.status}</p>

            {/* chat */}
            <div className="mt-3 bg-gray-50 p-3 rounded max-h-40 overflow-y-auto text-sm space-y-1">
              {t.messages?.map((m, i) => (
                <p key={i}>
                  <b className="capitalize">{m.sender}:</b> {m.text}
                </p>
              ))}
            </div>

            {/* reply */}
            <input
              placeholder="Reply and press Enter..."
              className="border w-full p-2 rounded mt-2 text-sm"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage(t._id, e.target.value);
                  e.target.value = "";
                }
              }}
            />
          </div>
        ))}
      </div>

      {/* ======================
          PAGINATION
      ====================== */}
      <div className="flex gap-3 mt-6 items-center">
        <button
          disabled={page === 1}
          onClick={() => load(page - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span>
          Page {page} / {pages}
        </span>

        <button
          disabled={page === pages}
          onClick={() => load(page + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
