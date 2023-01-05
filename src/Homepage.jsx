import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid } from '@mui/material';
export const Homepage=()=> {
  return (
    <div>
        
        <section class="showcase">
    <header>
      <h2 class="logo">Mansahaai</h2>
      
      <Link to="/Login" className="btn btn-light ">
                Login 
              </Link>
    </header>
    <video src="https://traversymedia.com/downloads/videos/explore.mp4" muted loop autoplay></video>
    <div class="overlay"></div>
    <div class="text">
      <h2>Say Yes </h2> 
      <h3>To Your Good Health  :)</h3>
      <p>At our medical center, we offer a wide range of services to meet the healthcare needs of our patients. Our team of experienced doctors and nurses are dedicated to providing the highest quality of care in a welcoming and comfortable environment. From routine check-ups and vaccinations to more specialized treatments and surgeries, we have the expertise and resources to address a variety of medical concerns.</p>
      <Link to="/Product" className="btn btn-light ">
                Healthify
              </Link>
      {"    "}{"    "}
      <Link to="/Bloodbank" className="btn btn-light ">
                Bloodbank
              </Link>
    

      <li> </li><li> </li><li> </li> <li> </li> <li> </li> <li> </li> <li> </li><li> </li> <li> </li><li> </li><li> </li>  <li> </li>
      <li>  </li>
      <Grid container spacing={2}>
      <Grid item xs={1.4}>
      <FacebookIcon className='svg_home'/>
      </Grid>
      <Grid item xs={1.4}>
      <TwitterIcon className='svg_home'/>
      </Grid>
      <Grid item xs={1.4}>
      <InstagramIcon className='svg_home'/>
      </Grid>
    </Grid>
          </div>
     {/*<li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png" /></a></li>
      <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" /></a></li>
  <li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png" /></a></li>*/}
     
  </section>
  <div class="menu">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Destination</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
    </div>

  )
}
export default Homepage