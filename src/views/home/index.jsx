import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../../api/posts'
import Post from '../../components/post'

const Home = () => {
    const [posts, setPosts] = useState()

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const allPosts = await fetchPosts()
        console.log(allPosts);
        setPosts(allPosts?.data?.data?.slice(0, 5))
    }

  return (
    <>
        {posts?.map((p, i) => (
            <Post key={p?.id} post={p} index={i} />
        ))}
    </>
  )
}

export default Home