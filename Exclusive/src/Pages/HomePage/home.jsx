import React from 'react'
import HeaderPageComponents from '../../Components/HeaderPageComponents/headerPageComponents'
import FlashSalesSection from '../../Components/FlashSalesSection'
import Category from '../../Components/BrowseByCategory/category'
import Music from '../../Components/MusicExperience/music'
import Arrival from '../../Components/NewArrival/arrival'
import FastAndFree from '../../Components/FreeAndFastCustomerSection/fast'

function Home() {
  return (
    <div>
     <HeaderPageComponents/>
     <FlashSalesSection/>
     <Category/>
     <Music/>
     <Arrival/>
     <FastAndFree/>
    
    </div>
  )
}

export default Home
