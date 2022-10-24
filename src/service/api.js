import axios from 'axios';


const url = "http://127.0.0.1:3003/blogs";
const url_comments = "http://127.0.0.1:3003/comments";

export const addComment = (comment) => axios.post(url_comments, comment);

//get all comments of a blog
export const getComments = (id) => axios.get(`${url_comments}?postId=${id}`);

//delete all comments of a blog
export const deleteComments = (id) => axios.delete(`${url_comments}/${id}`);

export const getAllPosts = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addPost = async (post) => {
    return await axios.post(url, post);
}

export const editPost = async (id, post) => {
    return await axios.put(`${url}/${id}`, post);
}


export const deletePost = async (id) => {
    return await axios.delete(`${url}/${id}`);
}