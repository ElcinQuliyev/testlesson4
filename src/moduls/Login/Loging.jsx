import React from "react";
import { useNavigate } from "react-router-dom";
// Login olanda post ve todo gorunmelidir..!
export default function Loging() {
  const navigate = useNavigate();

  const [postTitle, setTitle] = React.useState(null);
  const handleLoging = () => {
    localStorage.setItem("post", postTitle);
    navigate("/post", "/todos");
  };
  return (
    <div>
      <form onSubmit={handleLoging}>
        <label>Postlar ve Todolar</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Daxil Olun</button>
      </form>
    </div>
  );
}
