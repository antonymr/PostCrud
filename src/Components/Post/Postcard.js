import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PostCard({ post, handleShow }) {
  return (
    <Card>
      <Card.Header>{post.title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p> {post.body} </p>
        </blockquote>
      </Card.Body>
      <Card.Footer className="justify-content-end">
        <Button title="Comments" type="button" onClick={() => handleShow(post)}>
          Comentarios
        </Button>
      </Card.Footer>
    </Card>
  );
}
export default PostCard;
