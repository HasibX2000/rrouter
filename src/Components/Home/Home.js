import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigator = useNavigate()
  return (
    <div>
      <h1>This is homepage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
        totam excepturi adipisci voluptatem nobis! Est, magnam fugiat. Nemo
        porro quibusdam, quos suscipit est doloremque neque, beatae harum alias
        ab numquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ipsum
        recusandae quibusdam totam laborum animi pariatur perspiciatis veniam
        beatae incidunt nam, qui nemo officiis dicta voluptates sunt suscipit
        nostrum unde.
      </p>
      <button
        onClick={() => {
          navigator('/contact')
        }}
      >
        Get In Touch
      </button>
    </div>
  )
}

export default Home
