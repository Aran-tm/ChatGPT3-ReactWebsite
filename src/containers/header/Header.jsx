import React from 'react'
import './header.css'

import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

function Header() {
  return (
    <div className='gpt__header section__padding' id='home'>
        <div className='gpt__header-content'>
            <h1 className='gradient__text'>
                Let's Build Something amazing with GPT-3 OpenAI
              </h1>
              <p>ChatGPT is an artificial intelligence (AI) chatbot that leverages the Generative Pre-trained Transformer (GPT) model to engage in human-like conversations. It's designed to interact with users in a conversational manner, optimized for dialogue by human trainers.</p>
            
            <div className='gpt3__header-content__input'>
                <input type="email" placeholder='Your Email Adress' />
                <button type='button'>Get Started</button>
            </div>
            
            <div className='gpt3__header-content__people'>
                  <img src={people} alt="people" />
                  <p>1600 people requested access a visit in last 24 hours</p>
            </div>
            
            <div className='gpt3__header-image'>
                <img src={ai} alt="ai" />
            </div>
        </div>
    </div>
  )
}

export default Header
