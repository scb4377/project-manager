import axios from 'axios'

const API_URL = "/api/bugs"

export const createBug = async (data) => {
    const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, config);

  if (!response) {
    console.log('createBug error')
  } else {
    return response
  }
}