import React from 'react'
import { useParams } from 'react-router-dom'

const NotFound = () => {
    const {name} = useParams()
  return (
    <div>
      <h1>{name} Not Found</h1>
    </div>
  )
}

export default NotFound
