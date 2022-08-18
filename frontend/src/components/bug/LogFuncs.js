import axios from 'axios'

const API_URL = "/api/logs/"

export const GetLogs = async (bugId, userId) => {
    const data = {
        userId,
        bugId
    }
    const response = await axios.get(API_URL + bugId, { params: { userId: userId, bugId: bugId }})

    if (!response) {
        console.log("Error occured")
    } else {
        return response.data
    }
}