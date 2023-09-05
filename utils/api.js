import axios from "axios"

const BASE_URL = 'https://news-api-4x3j.onrender.com/api'

export const getAllArticles = () => {
    return axios
    .get(`${BASE_URL}/articles`)
    .then((response) => {
        return response.data.allArticles
    })
}

export const getArticleById = (article_id) => {
    return axios
    .get(`${BASE_URL}/articles/${article_id}`)
    .then((response) => {
        return response.data.article
    })
}

export const getCommentsById = (article_id) => {
    return axios.get(`${BASE_URL}/articles/${article_id}/comments`)
    .then((response) => {
        return response.data.comments
    })
}