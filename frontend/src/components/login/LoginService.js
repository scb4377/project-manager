import axios from 'axios'

const API_URL = '/api/user/login'

export const loginFunc = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('token', JSON.stringify(response.data.token))
        const { _id, firstName, lastName, username, email, phone } = response.data

        const user = {
            id: _id,
            firstName,
            lastName,
            username,
            email,
            phone
        }
        return user
    } else {
        console.log('error')
    }

    console.log(response.data)
}