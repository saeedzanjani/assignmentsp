import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPost } from '../../api/posts'
import './Category.scss'

const Category = () => {
    const [post, setPost] = useState()
    const [wishlist, setWishlist] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getPost(id)
    }, [id])

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem("wishlist"))
        if (list) {
            setWishlist([...new Set(list)])
        }
    }, [])

    const getPost = async (postId) => {
        const singlePost = await fetchPost(postId)
        console.log(singlePost);
        setPost(singlePost?.data?.data)
    }

    const addWishlist = () => {
        const arr = [...wishlist]
        const item = arr?.find((a) => a?.id === post?.id)
        if (!item) {
            arr.push(post)

            localStorage.setItem("wishlist", JSON.stringify([...new Set(arr)]))
            setWishlist([...new Set(arr)])
        }

    }

    const removeWishlist = (id) => {
        const arr = [...wishlist]
        const filteredWishlist = arr?.filter((f) => f?.id !== id)

        localStorage.setItem("wishlist", JSON.stringify(filteredWishlist))
        setWishlist(filteredWishlist)
    }

    
console.log(wishlist);

  return (
    <div className='category'>
        <div className='category_image'>
            <img src={post?.avatar} alt={post?.title} width="100%" height="100%" style={{objectFit: 'contain'}} />
        </div>
        <div className='category_body'>
            <p>{post?.first_name} {post?.last_name}</p>
            <button className='category_body_btn' onClick={addWishlist}>Add to wishlist</button>

            <br />
            <br />
            <br />
            <h2>{wishlist?.length ? 'Wishlist' : 'Wishlist is empty'}</h2>
            {wishlist?.map((w) => (
                <div className='wishlist'>
                    <span>{w?.first_name} {w?.last_name}</span>
                    <span className='wishlist_remove' onClick={() => removeWishlist(w?.id)}>&otimes;</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category