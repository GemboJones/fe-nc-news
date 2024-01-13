import axios from "axios"

const BASE_URL = 'https://news-api-4x3j.onrender.com/api'

export const getArticles = () => {
    return axios
    .get(`${BASE_URL}/articles`)
    .then((response) => {
        return response.data.articles
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

export const patchArticleVote = (article_id, updateVote) => {
    return axios.patch(`${BASE_URL}/articles/${article_id}`, updateVote)
    .then((response) => {
        return response.data.updatedArticle.votes
    })
}

export const postNewComment = (article_id, addNewComment) => {
    return axios.post(`${BASE_URL}/articles/${article_id}/comments`, addNewComment)
    .then((response) => {
        return response.data.commentAdded

    })
}
