import React from 'react'
import Image from "../assets/images/IMG_20190216_155103-01.jpg"


function HeroSection() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-4 ' style={{ paddingTop:"12rem", paddingLeft:"6rem"}}> 
                <h1>
                    Hi,
                </h1>
                <h3>
                    Arslan there
                </h3>
                <p>
                    4th year Student at sukkur IBA University                 
                </p>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4'> 
              <img  src={Image} style={{width:"20rem" ,height:"20rem", marginTop:"9rem", borderRadius:"50rem" , marginLeft:"20rem"} }></img>
            </div>
        </div>
      
    </div>
  )
}

export default HeroSection
