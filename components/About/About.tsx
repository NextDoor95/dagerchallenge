import React from 'react'

import Image from 'next/image'
import dagercat from "../../public/dagercat.jpg"

function About() {
  return (
    <section className='about'>
      <div>
        <Image src={dagercat} width={300} height={200} alt="dagercat" />   
      </div>
      <div>
        <Image src={dagercat} width={300} height={200}  alt="dagercat" />   
      </div>
      <div>
        <Image src={dagercat} width={300} height={200}  alt="dagercat" />   
      </div>
      <div>
        <Image src={dagercat} width={300} height={200}  alt="dagercat" />   
      </div>
      <div>
        <Image src={dagercat} width={300} height={200}  alt="dagercat" />   
      </div>
    </section>
  )
}

export default About