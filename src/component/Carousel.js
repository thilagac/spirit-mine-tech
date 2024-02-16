import React from 'react'
import video from '../component/image/v.mp4'
import video1 from '../component/image/v2.mp4'
import video2 from '../component/image/v3.mp4'
import img from '../component/image/front.jpg'
import img1 from '../component/image/full.jpg'
import img2 from '../component/image/back.jpg'
function Carousel() {
  return (
    <div>
      <div class="container-fluid text-center">
      
     
  <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={img} class="d-block w-100 img-slide" alt="..."/>
    
    </div>
    <div class="carousel-item">
      <img src={img1} class="d-block w-100 img-slide " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100 img-slide " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
    
</div>
  


  
</div>
    </div>
  )
}

export default Carousel
