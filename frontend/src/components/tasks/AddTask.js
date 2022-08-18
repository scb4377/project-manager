import axios from 'axios'

const API_URL = "/api/user/tasks/"

export const AddTask = async (userId, data) => {
    const response = await axios.put(API_URL + userId, data)
}