import axios from 'axios'

const API_URL = "/api/projects/comment/"

export const AddComment = async (data, id) => {
    const token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    let id_url = API_URL + id

    //PUT /api/project/:id

    const response = await axios.put(id_url, data, config)
    if (!response) {
        console.log("Error Adding Comment")
    }
}