import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function CommentModal({ modal, handleClose }) {
  const { show, post, comments } = modal;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{post.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="px-4">{post.body}</p>
        <Row xs={1} md={1} className="g-4">
          {comments.map((comment) => (
            <Col key={comment.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{comment.name}</Card.Title>
                  <Card.Text>{comment.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CommentModal;
