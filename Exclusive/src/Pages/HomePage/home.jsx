import React from 'react'
import HeaderPageComponents from '../../Components/HeaderPageComponents/headerPageComponents'
import FlashSalesSection from '../../Components/FlashSalesSection'
import Category from '../../Components/BrowseByCategory/category'
import Music from '../../Components/MusicExperience/music'
import Arrival from '../../Components/NewArrival/arrival'
import FastAndFree from '../../Components/FreeAndFastCustomerSection/fast'
import FlashFetch from '../../Components/FlashFetch/flashfetch'
import OurProducts from '../../Components/OurProductFetchOne'
import OurProductsTwo from '../../Components/OurProductFetchTwo'

function Home() {
  return (
    <div className='container'>
     <HeaderPageComponents/>
     <FlashSalesSection/>
     <FlashFetch/>
     <Category/>
     <OurProducts/>
     <OurProductsTwo/>
     <Music/>
     <Arrival/>
     <FastAndFree/>
    
    </div>
  )
}

export default Home
