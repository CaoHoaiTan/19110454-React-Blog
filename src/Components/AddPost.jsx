import React, { useState } from "react";
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
import { addPost } from "../service/api";
import { useHistory } from "react-router-dom";

const initialValue = {
  title: "",
  body: "",
  author: "",
};

const AddPost = () => {
  const [post, setPost] = useState(initialValue);
  const { title, body, author } = post;

  const history = useHistory();

  const onValueChange = (e) => {
    //  console.log(e);
    // console.log(e.target.value);
    setPost({ ...post, [e.target.name]: e.target.value });
    console.log(post);
  };

  const addPostDetail = async () => {
    await addPost(post);
    history.push("/");
  };

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h5" align="center">
          Add Post Details
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
              onClick={() => addPostDetail()}
              color="primary"
              align="center"
            >
              Add Post
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

export default AddPost;
