import axios from "axios";

const API_URL = "/api/projects/project/";

export const GetProject = async (id) => {
  const response = await axios.get(API_URL + id);

  if (!response) {
    console.log("Something went wrong");
  } else {
    return response;
  }
};
