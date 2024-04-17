import React from 'react'
import './feature.css'

// this are props
function Feature({title, text}) {
  return (
    <div className="gpt3__features-container__feature">
          <div className="gpt3__features-container__feature-title">
              
              {/** This is an empty div for line gradient color */}
              <div />
              <h1>{title}</h1>
        </div>
        <div className="gpt3__features-container_feature-text">
            <p>{text}</p>
        </div>
   </div>
  )
}

export default Feature
