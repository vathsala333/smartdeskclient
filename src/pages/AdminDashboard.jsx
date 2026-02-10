import React,{ useEffect, useState } from "react";
import api from "../api";
import { PieChart, Pie, Cell } from "recharts";

export default function AdminDashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    api.get("/tickets", {
      headers: { authorization: localStorage.token }
    }).then(res => setTickets(res.data));
  }, []);

  const data = [
    { name: "Open", value: tickets.filter(t => t.status==="open").length },
    { name: "Closed", value: tickets.filter(t => t.status==="closed").length }
  ];

  return (
    <PieChart width={400} height={300}>
      <Pie data={data} dataKey="value" />
    </PieChart>
  );
}
