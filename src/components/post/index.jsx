import React from 'react'
import { Link } from 'react-router-dom'
import './Post.scss'

const Post = ({post, index}) => {
    
  return (
    <Link to={`/category/${post?.id}`} className='container'>
        <span className='post'>
            Carousel {index+1}
        </span>
    </Link>
  )
}

export default Post