import http from './index'

export const fetchPosts = async () => {
    try {
        const posts = await http.get("/api/users?page=2")
        return posts
    } catch (err) {
        console.log(err);
    }
}

export const fetchPost = async (id) => {
    try {
        const post = await http.get(`/api/users/${id}`)
        return post
    } catch (err) {
        console.log(err);
    }
}