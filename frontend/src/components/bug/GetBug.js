import axios from 'axios'

const API_URL = "/api/bugs/"

export const GetBug = async (id) => {
    const response = await axios.get(API_URL + id)

    if (!response) {
        console.log('error')
    } else {
        return response.data
    }
}