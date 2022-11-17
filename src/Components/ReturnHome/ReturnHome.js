import React from 'react'
import { useNavigate } from 'react-router'
import './ReturnHome.css'

const ReturnHome = () => {
  const navigator = useNavigate()
  return (
    <div>
      <button
        onClick={() => {
          navigator('/')
        }}
      >
        Return to homepage
      </button>
    </div>
  )
}

export default ReturnHome
