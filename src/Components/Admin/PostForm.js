import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

function PostForm({ modal, handleFormAction, handleClose }) {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { isSubmitSuccessful },
    formState: { errors },
  } = useForm({ defaultValues: { title: "", body: "" } });

  useEffect(() => {
    if (modal.post) {
      reset({
        title: modal.post.title,
        body: modal.post.body,
      });
    }
  }, [reset, isSubmitSuccessful, modal.post]);

  const onSubmit = (data) => {
    const post = {
      title: data.title,
      body: data.body,
      userId: modal.post.userId,
    };
    if (modal.isEdit) {
      handleFormAction({ ...post, id: modal.post.id });
    } else {
      handleFormAction(post);
    }
    handleClose();
  };

  const onClose = () => {
    handleClose();
    clearErrors();
  };

  return (
    <Modal show={modal.show} onHide={onClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="inputTitle">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              {...register("title", {
                required: true,
              })}
            />
            {errors.title && (
              <Form.Text className="text-danger">
                Este campo es obligatorio.
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputTitle">
            <Form.Label>Contenido</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register("body", { required: true })}
            />
            {errors.body && (
              <Form.Text className="text-danger">
                Este campo es obligatorio.
              </Form.Text>
            )}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            {modal.isEdit ? "Guardar Cambios" : "Agregar"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
export default PostForm;
