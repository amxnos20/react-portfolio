import React from 'react'
import './Title.css'

const Title = ({ title, borderBottomColor = '#001c55', color = '#000' }) => {
  return (
    <div className='section-title-container'>
      <h1 style={{ borderBottomColor, color }}>{title}</h1>
    </div>
  )
}

export default Title
