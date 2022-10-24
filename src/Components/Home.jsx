import React, { useEffect, useState } from "react";
import {
  deletePost,
  getAllPosts,
  deleteComments,
  getComments,
} from "../service/api";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const response = await getAllPosts();
    console.log(response);
    setPost(response.data);
  };

  const deleteData = async (id) => {
    const comments = await getComments(id);
    comments.data.map(async (comment) => {
      await deleteComments(comment.id);
    });
    await deletePost(id);
    console.log("Deleted");
    getPost();
  };

  return (
    <div className="home">
      <div className="blog-list">
        <h2>{post.title}</h2>
        {post.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <Button
              variant="contained"
              color="success"
              style={{ margin: "0px 20px" }}
              component={Link}
              to={`/blogs/${blog.id}`}
            >
              Detail
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "0px 20px" }}
              component={Link}
              to={`/edit/${blog.id}`}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: "0px 20px" }}
              onClick={() => deleteData(blog.id)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
