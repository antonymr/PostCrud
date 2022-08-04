import React, { useEffect, useState } from "react";
import PostCard from "./Postcard";
import CommentModal from "./CommentModal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [modal, setmodal] = useState({
    show: false,
    post: null,
    comments: [],
  });

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleClose = () => {
    setmodal({
      show: false,
      post: null,
      comments: [],
    });
  };

  const handleShow = (post) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setmodal({
          show: true,
          post: post,
          comments: data,
        });
      });
  };

  return (
    <div className="px-5 py-2">
      <Row xs={1} md={1} className="g-4">
        {posts.map((post) => (
          <Col key={post.id}>
            <PostCard post={post} handleShow={handleShow} />
          </Col>
        ))}
      </Row>
      {modal.post && <CommentModal modal={modal} handleClose={handleClose} />}
    </div>
  );
}
export default PostList;
