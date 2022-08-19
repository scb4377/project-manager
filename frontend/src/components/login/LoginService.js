import axios from "axios";

const API_URL = "/api/user/login";

export const loginFunc = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
    const { _id, firstName, lastName, username, email, phone, img, tasks, teamId } =
      response.data;

      console.log(response.data)

    const user = {
      id: _id,
      firstName,
      lastName,
      username,
      email,
      phone,
      img,
      tasks,
      teamId
    };
    return user;
  } else {
    console.log("error");
  }
};

export const demoFunc = async () => {
  const response = await axios.post(API_URL, { demo: "" });

  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
    const { _id, firstName, lastName, username, email, phone, img, tasks, teamId } =
      response.data;

    const user = {
      id: _id,
      firstName,
      lastName,
      username,
      email,
      phone,
      img,
      tasks,
      teamId
    };
    return user;
  } else {
    console.log("error");
  }
};
