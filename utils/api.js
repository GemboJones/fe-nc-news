import axios from "axios"

const BASE_URL = 'https://news-api-4x3j.onrender.com/api'

export const getAllArticles = () => {
    return axios
    .get(`${BASE_URL}/articles`)
    .then((response) => {
        return response.data.allArticles
    })
}