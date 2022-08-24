import axios from "axios";

const API_URL = "/api/user/";

export const AddTask = async (userId, data) => {
  const response = await axios.put(API_URL + "tasks/" + userId, data);

  if (!response) {
    console.log("error");
  } else {
    return response;
  }
};

export const DeleteTask = async (userId, id) => {
  const data = {
    id,
  };
  const response = await axios.put(API_URL + "tasks/delete/" + userId, data);

  if (!response) {
    console.log("Error Occurred");
  } else {
    return response;
  }
};

export const GetMe = async () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "me", config);

  if (!response) {
    console.log("Error occured");
  } else {
    return response.data;
  }
};
