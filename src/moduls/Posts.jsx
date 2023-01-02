import React from "react";

export default function Posts() {
  const [post, setPost] = React.useState(null);
  const [isLoding, setLoding] = React.useState(true);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      // .then((post) => setPost(post))
      .then((post) => console.log(post)) // catch isdifade olunsun.?
      .finally(() => setLoding(false));
  }, []);
  if (isLoding) {
    return <h1>Yuklenir...</h1>;
  }

  return (
    <div>
      <h1>
        Post:
        {/* {post.title}
        {post.userId} */}
      </h1>
    </div>
  );
}
