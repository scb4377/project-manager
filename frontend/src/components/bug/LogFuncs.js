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

export const AddLog = async (bugId, data) => {
    const response = await axios.post(API_URL + bugId, data)

    if (!response) {
        console.log("Error deleting log")
    } else {
        return response
    }
}

export const DeleteLog = async (logId) => {
    const response = await axios.delete(API_URL + logId)

    if (!response) {
        console.log("Error deleting log")
    } else {
        return response
    }
}