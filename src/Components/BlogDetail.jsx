import { useParams } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import { addComment, getAllPosts, getComments } from "../service/api";
import { Input, Button } from "@material-ui/core";
const initialValue = {
  title: "",
  body: "",
  author: "",
};

const initialValueForComment = {
  content: "",
  author: "",
  postId: "",
};
const BlogDetails = () => {
  const [post, setPost] = useState(initialValue);
  const [comment, setComment] = useState(initialValueForComment);
  const { content, author, postId } = comment;
  const { id } = useParams();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    loadPostData();
  }, []);

  const loadPostData = async () => {
    const response = await getAllPosts(id);
    const responseForComment = await getComments(id);
    //check if responseForComment is empty or not
    if (responseForComment.data.length > 0) {
      setComments(responseForComment.data);
    } else {
      setComments([]);
    }
    setPost(response.data);
    console.log(response.data);
  };

  const onValueChange = (e) => {
    //  console.log(e);
    // console.log(e.target.value);
    setComment({ ...comment, [e.target.name]: e.target.value });
    console.log(comment);
  };

  const addCommentToBlog = async () => {
    //set the postId to the id of the blog
    comment.postId = id;
    await addComment(comment);
    //reset input comment
    setComment(initialValueForComment);
    loadPostData();
  };

  return (
    <Fragment>
      <div className="blog-details">
        <article>
          <h2>{post.title}</h2>
          <p>Written by {post.author}</p>
          <div>{post.body}</div>
        </article>
      </div>
      <div className="row">
        {/*  list comments*/}
        <div className="col-md-5">
          <h5>Comments</h5>
          {comments.map((comment) => (
            <div className="card p-3 mt-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="user d-flex flex-row align-items-center">
                  <img
                    src="https://i.imgur.com/C4egmYM.jpg"
                    width={30}
                    className="user-img rounded-circle mr-2"
                  />
                  <span>
                    <small className="font-weight-bold text-primary">
                      {comment.author} {"  "}
                    </small>
                    <small className="font-weight-bold">
                      {comment.content}
                    </small>
                  </span>
                </div>
              </div>
              <div className="action d-flex justify-content-end mt-2 align-items-center">
                <div className="icons align-items-center">
                  <i className="fa fa-check-circle-o check-icon text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* add comment */}
        <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
          <form id="algin-form">
            <div className="form-group">
              <h4>Post a comment</h4>
              <label htmlFor="message">Message</label>
              <textarea
                name="content"
                id
                msg
                cols={30}
                rows={5}
                className="form-control"
                style={{ backgroundColor: "rgb(132, 236, 227)" }}
                onChange={(e) => onValueChange(e)}
                required
                value={content}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Input
                type="text"
                name="author"
                id="fullname"
                className="form-control"
                required
                onChange={(e) => onValueChange(e)}
                value={author}
              />
            </div>
            <div className="form-group">
              <Button
                variant="contained"
                onClick={() => addCommentToBlog()}
                color="primary"
                align="center"
                style={{
                  margin: "10px",
                  padding: "6px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                  textAlign: "center",
                  backgroundColor: "#1fec41",
                  borderColor: "#a88734 #9c7e31 #846a29",
                  color: "black",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderRadius: "13px",
                  width: "50%",
                }}
              >
                Post Comment
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>

    // form comments
  );
};

export default BlogDetails;
