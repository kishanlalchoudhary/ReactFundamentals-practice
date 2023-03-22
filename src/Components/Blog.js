import React from "react";

export default function Blog(props) {
  const content = props.posts.map((post) => {
    return <Post key={post.id} post={post} />;
  });
  return <div>{content}</div>;
}

function Post(props) {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <h1>{props.post.content}</h1>
    </div>
  );
}
