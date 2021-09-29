import React from 'react'
import './Pokemon.css'

const Pokemon = ({id, name, image, type}) => {
  const typeStyle = `${type} type-wrapper`
  
    return (
    <div className="card capitalize">
        <div className="container">
            <p>#{id}</p>
        </div>
        <img src={image} alt={name} />
        <div className="detail-wrapper">
            <h3>{name}</h3>
            <p>Type: <span className={typeStyle}>{type}</span> </p>     
        </div>
    </div>
  )
}

export default Pokemon
