import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='img-div'>
        <Image src="/images/camscanner.jpg" alt="img" width={200} height={200} className="img"/>
        </div>
        <div className='info-div'>
            <h1 className='name'>Hello<br/>I am<br/>Shahjarar Khan</h1>
            <div className='btn'></div>
            <button className='bt'><Link href="/About" className='bt-li'>About Me</Link></button>
            <button className='bt'><Link href="/contact" className='bt-li'>Contact Me</Link></button>
        </div>
        </div>
        
      
    
    
  )
}

export default Hero
