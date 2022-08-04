import React from "react";

const PostContext = React.createContext();

export function PostProvider(props) {
  const onCreate = (post) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: post.title,
        body: post.body,
        userId: post.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(`Post ${json.id} Creado`);
      });
  };

  const onUpdate = (post) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
    const options = {
      method: "PUT",
      body: JSON.stringify({
        id: post.id,
        title: post.title,
        body: post.body,
        userId: post.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(`Post ${json.id} Creado`);
      });
  };

  const onDelete = (post) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
    const options = {
      method: "DELETE",
    };
    fetch(url, options).then((response) =>
      console.log(`Post ${post.id} Eliminado`)
    );
  };

  const functions = {
    onCreate: onCreate,
    onUpdate: onUpdate,
    onDelete: onDelete,
  };

  return (
    <PostContext.Provider value={functions}>
      {props.children}
    </PostContext.Provider>
  );
}
export default PostContext;
