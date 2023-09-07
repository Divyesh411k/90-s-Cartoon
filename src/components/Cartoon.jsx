import React from 'react'
import Navbar from './Navbar'
import Cartoonlist from './cartoon/Cartoonlist'

const Cartoon = () => {
  return (
    <div>
      <div className='bg'>
       <Navbar />
       <Cartoonlist/> 
    </div>
    </div>
  )
}

export default Cartoon
