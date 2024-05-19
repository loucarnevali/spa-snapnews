import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = 'https://api-snapnews.onrender.com';

export function getAllPosts() {
  const response = axios.get(`${baseURL}/posts`);
  return response;
}

export function getTopPost() {
  const response = axios.get(`${baseURL}/posts/top`);
  return response;
}

export function searchPosts(title) {
  const response = axios.get(`${baseURL}/posts/search?title=${title}`);
  return response;
}

export function getAllPostsByUser() {
  const response = axios.get(`${baseURL}/posts/byUserId`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  });
  return response;
}

export function createNews(body) {
  const response = axios.post(`${baseURL}/posts/create`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  });
  return response;
}

export function getNewsById(id) {
  const response = axios.get(`${baseURL}/posts/byIdPost/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  });
  return response;
}

export function editNews(body, id) {
  const response = axios.patch(`${baseURL}/posts/update/${id}`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  });
  return response;
}

export function deleteNews(id) {
  const response = axios.delete(`${baseURL}/posts/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  });
  return response;
}

export async function likePost(id, userId) {
  const token = Cookies.get('token');
  const url = `${baseURL}/posts/${id}/like`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios
    .patch(url, { userId }, config)
    .then((response) => {
      console.log('Request response:', response);
      return response;
    })
    .catch((error) => {
      console.error('Error when liking news:', error);
      throw error;
    });
}
