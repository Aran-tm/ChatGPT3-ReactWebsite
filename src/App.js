import React from 'react'

// importing all my components
import { Brand, CTA,  Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';

// this is my first React component
const App = () => {

  return (
      <div className='App'>
        <div className='gradient__bg'>
            {/** This are my Navbar and Header components */}
            <Navbar />
            <Header />
        </div>
        
        {/** This are my container components */}
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App