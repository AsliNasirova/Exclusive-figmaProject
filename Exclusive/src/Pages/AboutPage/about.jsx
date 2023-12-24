import React from 'react'
import Story from '../../Components/OurStory/story'
import Founder from '../../Components/FounderAbout/founder'
import Salers from '../../Components/Sallers/salers'
import FastAndFree from '../../Components/FreeAndFastCustomerSection/fast'

const AboutPage = () => {
  return (
    <div className='container'>
      <Story/>
      <Salers/>
      <Founder/>
      <FastAndFree/>
    </div>
  )
}

export default AboutPage
