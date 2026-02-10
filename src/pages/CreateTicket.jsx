import  react,{ useState } from "react";
import api from "../api";

export default function CreateTicket() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = async () => {
    await api.post("/tickets", { title, description }, {
      headers: { authorization: localStorage.token }
    });

    alert("Ticket created");
  };

  return (
    <div>
      <input onChange={e=>setTitle(e.target.value)} placeholder="Title" />
      <textarea onChange={e=>setDescription(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
