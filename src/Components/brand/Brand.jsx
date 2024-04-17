import React from 'react'
import './brand.css'

import { google, slack, atlassian, dropbox, shopify } from './imports'

function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <a href="https://google.com" target='_blank'><img src={google} alt="google" /></a>        
      </div>
      <div>
        <a href="https://slack.com" target='_blank'><img src={slack} alt="slack" /></a> 
      </div>
      <div>
        <a href="https://atlassian.com" target='_blank'><img src={atlassian} alt="atlassian" /></a> 
      </div>
      <div>
        <a href="https://dropbox.com" target='_blank'><img src={dropbox} alt="dropbox" /></a> 
      </div>
      <div>
        <a href="https://shopify.com" target='_blank'><img src={shopify} alt="shopify" /></a> 
      </div>
    </div>
  )
}

export default Brand
