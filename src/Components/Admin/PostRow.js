import React from "react";
import Button from "react-bootstrap/Button";

function PostRow({ post, handleDelete, handleEdit }) {
  return (
    <tr>
      <td>{post.title}</td>
      <td>{post.body}</td>
      <td>
        <div className="d-grid gap-2">
          <Button variant="primary" size="sm" onClick={() => handleEdit(post)}>
            Editar
          </Button>
          <Button variant="danger" size="sm" onClick={() => handleDelete(post)}>
            Eliminar
          </Button>
        </div>
      </td>
    </tr>
  );
}
export default PostRow;
