import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Box,
  FormGroup,
  Button,
} from "@material-ui/core";
import { editPost, getAllPosts } from "../service/api";
import { useHistory, useParams } from "react-router-dom";

const initialValue = {
  title: "",
  body: "",
  author: "",
};

const EditUser = () => {
  const [post, setPost] = useState(initialValue);
  const { title, body, author } = post;

  const { id } = useParams();

  useEffect(() => {
    loadPostData();
  }, []);

  const loadPostData = async () => {
    const response = await getAllPosts(id);
    setPost(response.data);
  };

  const history = useHistory();

  const onValueChange = (e) => {
    //  console.log(e);
    // console.log(e.target.value);
    setPost({ ...post, [e.target.name]: e.target.value });
    console.log(post);
  };

  const editPostDetail = async () => {
    await editPost(id, post);
    history.push("/");
  };

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h5" align="center">
          Update User Details
        </Typography>
        <FormGroup>
          <FormControl>
            <InputLabel>Title</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="title"
              value={title}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Body</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="body"
              value={body}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Author</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="author"
              value={author}
            />
          </FormControl>
          <Box my={3}>
            <Button
              variant="contained"
              onClick={() => editPostDetail()}
              color="primary"
              align="center"
            >
              Update Post
            </Button>
            <Button
              onClick={() => history.push("/")}
              variant="contained"
              color="secondary"
              align="center"
              style={{ margin: "0px 20px" }}
            >
              Cancel
            </Button>
          </Box>
        </FormGroup>
      </Box>
    </Container>
  );
};

export default EditUser;
