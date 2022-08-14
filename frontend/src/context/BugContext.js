import axios from "axios";

const API_URL = "/api";

export const getBugs = async () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + '/bugs', config);
  const bugs = await response.data;
  //   const {username, firstName, lastName, email, phone, img } = response.data;

  //   const user = {
  //     username,
  //     firstName,
  //     lastName,
  //     email,
  //     phone,
  //     img
  //   }

  if (!response) {
    console.log("error");
  } else {
    return bugs;
  }
};

export const getProjects = async () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + '/projects', config);
  const projects = await response.data;

  if (!response) {
    console.log('error')
  } else {
    return projects
  }
};

export const getTeams = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + '/teams', config);
  const teams = await response.data;

  if (!response) {
    console.log('error')
  } else {
    return teams
  }
}

export const getTasks = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + '/tasks', config);
  const tasks = await response.data;

  if (!response) {
    console.log('error')
  } else {
    return tasks
  }
}
