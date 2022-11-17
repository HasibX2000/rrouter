// import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
// import BlogsData from '../../BlogData.json'

const Blog = () => {
  const backprev = useNavigate()
  // const [bodyData, setBodyData] = useState('')
  const { title } = useParams()
  // useEffect(() => {
  //   const BlogData = BlogsData.filter((blog) => title === blog.title)
  //   setBodyData(BlogData[0].body)
  // }, [])
  const location = useLocation()
  console.log(location)
  return (
    <div className="BlogPost">
      <h1>{title}</h1>
      <p>{location.state.body}</p>
      <button
        onClick={() => {
          backprev('/blogs')
        }}
      >
        Back to Blog Post
      </button>
    </div>
  )
}

export default Blog
