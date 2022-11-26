import React from 'react'
import '../assest/Css/Customber.css'



export default function Customber() {
  return (
    <>
      <div className='customberMain'>
       <div className='customberHead'>
         <p>Tursted by Thousands of Happy Customber</p>
       </div>
       <div className='customberSubHead'>
        <p>These are th story of our customber who have joined us a great plesure when using this crazy feature.</p>
       </div>
       </div>
       <div className='CustomberRatingWrapper customberMain'>
         <div className='CustomberReview'>

         </div>
       </div>

       <div className='subscribeaDiv'>
        <div className='SubscribeContent'>
            <h5 className='subscribeHead'>Subscribe for the get Special Features</h5>
            <p className='subscribeSubHead'>Let`s subscribe with us and find th fun.</p>
        </div>
        <div className='subscribeBtn'>
            <button>Subscribe</button>
        </div>

       </div>
    </>
  )
}
