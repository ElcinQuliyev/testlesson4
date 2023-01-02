import React from "react";

export default function Posts() {
  const [posts, setPosts] = React.useState(null);
  const [isLoding, setLoding] = React.useState(true);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts))
      // .then((post) => console.log(post)) // catch isdifade olunsun.?
      .finally(() => setLoding(false));
  }, []);
  if (isLoding) {
    return <h1>Yuklenir...</h1>;
  }

  return (
    <div>
      <h1 style={{ border: "1px solid blue" }}>
        Post:
        {posts &&
          posts.map((post) => {
            return (
              <div>
                <p>{post.id}</p>
                <p>{post.title}</p>
              </div>
            );
          })}
      </h1>
    </div>
  );
}
