import React from "react";

// Login olanda post ve todo gorunmelidir..!
export default function Loging() {
  const [postTitle, setTitle] = React.useState(null);
  return (
    <div>
      <form>
        <label>Postlar ve Todolar</label>
        <input type="text" />
        <button type="submit">Daxil Olun</button>
      </form>
    </div>
  );
}
