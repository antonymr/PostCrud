import React, { useContext, useEffect, useState } from "react";
import PostTable from "./PostTable";
import PostContext from "../../contexts/PostContext";
import PostForm from "./PostForm";
import { Button } from "react-bootstrap";

function Post() {
  const [posts, setPosts] = useState([]);
  const [modal, setmodal] = useState({
    show: false,
    post: null,
    isEdit: false,
  });
  const { onUpdate, onDelete, onCreate } = useContext(PostContext);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleShow = (show = true, post = {}, isEdit = false) => {
    setmodal({ show: show, post: post, isEdit: isEdit });
  };

  const handleClose = () => {
    handleShow(false);
  };

  const handleEdit = (post) => {
    handleShow(true, post, true);
  };

  const handleCreate = () => {
    const post = {
      title: "",
      body: "",
      userId: process.env.REACT_APP_USER_ID,
    };
    handleShow(true, post);
  };

  const handleFormAction = (post) => {
    if (modal.isEdit) {
      onUpdate(post);
    } else {
      onCreate(post);
    }
  };

  const handleDelete = (post) => {
    onDelete(post);
  };

  return (
    <div className="px-5 py-2">
      <div className="d-flex justify-content-between pb-2">
        <h3>Todos los Post</h3>
        <Button type="button" onClick={handleCreate}>
          Crear
        </Button>
      </div>
      <PostTable
        posts={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <PostForm
        modal={modal}
        handleFormAction={handleFormAction}
        handleClose={handleClose}
      />
    </div>
  );
}
export default Post;
