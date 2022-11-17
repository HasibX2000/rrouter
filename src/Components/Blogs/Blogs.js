import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReturnHome from '../ReturnHome/ReturnHome'
import Blogdata from './../../BlogData.json'
import './Blogs.css'

const Blogs = () => {
  const [blogs] = useState(Blogdata)
  const trimming = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str + '...'
    }
  }
  return (
    <div>
      <h1>This is blogs page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog
          return (
            <article key={id}>
              <h2>{title}</h2>
              <p>{trimming(body, 200)}</p>
              <Link className="PostBtn" to={title} state={{ id, title, body }}>
                View Post
              </Link>
            </article>
          )
        })}
      </section>
      <ReturnHome />
    </div>
  )
}

export default Blogs
