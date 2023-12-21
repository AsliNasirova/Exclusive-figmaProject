import React from 'react'
import './story.scss'

const Story = () => {
  return (
    <div>
   <div className="homeAboutText">
    <h6 className='home_story'>Home /</h6>
    <h6 className='about_story'>About</h6>
   </div>

   <div className="ourStory_container">

    <div className="ourStory_leftPart">
        <div className="title_story_leftPart">
            <h2>OUR STORY</h2>
        </div>
        <div className="text_story_leftPart">
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>

            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer. </p>
        </div>

    </div>

    <div className="ourStory_rightPart">
        <div className="image_Story_rightPart">
            <img src="../../../imgs/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png" alt="" />
        </div>
    </div>
   </div>

 </div>
  )
}

export default Story
