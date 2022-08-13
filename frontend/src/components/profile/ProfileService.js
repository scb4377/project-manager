import axios from "axios";

const API_URL = "/api/user";

export const getMyProfile = async () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + '/me', config);
  const {username, firstName, lastName, email, phone, img } = response.data;

  const user = {
    username,
    firstName,
    lastName,
    email,
    phone,
    img
  }

  if (!response) {
    console.log("error");
  } else {
    return user
  }
};

export const updateProfile = async (formInput) => {
    const token = JSON.parse(localStorage.getItem("token"))

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

    const response = await axios.put(API_URL, formInput, config);

    if (!response) {
        console.log('error')
    } else {
        return response.data;
    }
}

export const logout = () => {
    localStorage.removeItem('token')
}
