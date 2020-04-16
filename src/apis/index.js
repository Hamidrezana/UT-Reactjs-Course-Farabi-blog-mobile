import axios from 'axios';

export const axiosAgent = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://farabi-blog-server.herokuapp.com',
  // timeout: 1000,
});

export const setAuthToken = token =>
  (axiosAgent.defaults.headers.common['Authorization'] = `Bearer ${token}`);

export const register = userInfo =>
  axiosAgent.post('/auth/register', {
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    password: userInfo.password,
  });

export const login = userInfo =>
  axiosAgent.post('/auth/login', {
    email: userInfo.email,
    password: userInfo.password,
  });

export const getPosts = () => axiosAgent.get('/blog/posts');

export const getUserPosts = () => axiosAgent.post('/user/blogs');

export const addPost = postInfo =>
  axiosAgent.post('/blog/add', {
    title: postInfo.title,
    text: postInfo.description,
  });

export const addDevice = deviceInfo =>
  axiosAgent.post('/device/add', {
    deviceId: deviceInfo.uniqueId,
    brand: deviceInfo.brand,
    model: deviceInfo.model,
    systemVersion: deviceInfo.systemVersion,
  });
