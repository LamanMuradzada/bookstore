import React from 'react';
import "./title.css"

const Title = ({content}) => {
  return (
    <div>
         <h2>
            <span>{content}</span>
         </h2>
    </div>
  )
}

export default Title