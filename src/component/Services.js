import React from 'react'
import video from '../component/image/v2.mp4'
import video1 from '../component/image/v5.mp4'
import video2 from '../component/image/v4.mp4'
import first from '../component/image/2.webp'
import second from '../component/image/3.avif'
import third from '../component/image/2.png'
function Services() {
  return (
    <div className='services' id='services'>
    
       <video src={video2} autoPlay loop class="d-block w-100  img" />
 
      <div className='container '>
        <div className='container-fluid'>
            <br/>   <br/>   <br/>
            <h1 className='heading'>Services</h1>
            <br/><br/><br/>
            <div class="container ">
           

  <div class="row card-design1 ">
  <div  class="col-lg-4 col-md-4 col-sm-6 card card-design">
   <div className=''>
    <div class="card" >
    <img src={second} className='video'></img>
  <div class=""><br></br>
    <h5 class="card-title mission">Boost Your Brand with Digital Magic!</h5>
    <p class="card-text">Looking to boost your online presence and reach a wider audience? Look no further than our digital marketing service! We specialize in creating engaging and effective online marketing campaigns that…</p>
    
  </div>
</div>
    </div>
   </div>
   <div  class="col-lg-4 col-md-4 col-sm-6 card card-design">
   <div className=''>
    <div class="card" >
    <img src={third} className='video'></img>

  <div class=""><br></br>
    <h5 class="card-title mission">Get a Beautiful  Website Design!</h5>
    <p class="card-text">Hey there! Need a killer web or mobile app? Look no further! Our talented team of developers are here to make your digital dreams come true. In the first paragraph,…     </p>
    
  </div>
</div>
    </div>
   </div>
   <div  class="col-lg-4 col-md-4 col-sm-6 card card-design">
   <div className=''>
    <div class="card" >
    <img src={first} className='video'></img>

  <div class="">
    <br></br>
    <h5 class="card-title mission">Get a Killer Website Design!</h5>
    <p class="card-text">Hey there! Looking to create a killer website that will make heads turn? Look no further! Our website design service is here to make your online presence shine like a…     </p>
    
  </div>
</div>
    </div>
   </div>
   
  </div>

 
</div>
        </div>
      </div>
     
 


<br></br><br/><br/>
    </div>
  )
}

export default Services
