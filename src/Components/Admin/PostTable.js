import React from "react";
import Table from "react-bootstrap/Table";
import PostRow from "./PostRow";

function PostTable({ posts, handleEdit, handleDelete }) {
  const items = posts.map((post) => (
    <PostRow
      key={post.id}
      post={post}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  ));

  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Contenido</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </Table>
    </>
  );
}
export default PostTable;
