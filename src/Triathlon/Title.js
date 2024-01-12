import React from 'react'
import './Title.css'
import mlsaicon from '../images/MLSA_logo-transformed.png';
import gfg from '../images/gfg-icon.png';
import iglogo from '../images/igdtuw_logo.png';
import qrcode from '../images/qrcode.png';

const Title = () => {
  return (
    <div className='Title'>
      <div className='headings'>  
       <div className='topbar'>
         <img src={mlsaicon} className='icon'/>
         <img src={gfg} className='gfgicon' id='gfgicon'/>
         <div className='text'>
          <h4>Under the Department of AI & DS</h4>
          <h4>Microsoft Learn Student Ambassador Student Chapter-IGDTUW </h4> 
          <i>Presents</i>
         </div>
         <img src={iglogo} className='icon'/>
        </div>
        <div>
          <div className='headingcontainer'>
            <br></br>
            <br></br>
           <h5 className='Tech'>TECH</h5>
           <h5 className='Tech'>TECH</h5>
           <h5 className='Tech'>TECH</h5> 
          </div>  
          <br></br>
          <br></br>
          <br className='break'></br>
          <div className='headingcontainer'> 
           <h1 className='Triathlon'>TRIATHLON</h1>
           <h1 className='Triathlon'>TRIATHLON</h1>
           <h1 className='Triathlon'>TRIATHLON</h1>
           <br className='break'></br>
           <br className='break'></br>
          </div>
        </div>
        <div className="scrolling-container" id="text-scrolling" >
          <div className="scrolling-text--inner direction-left">
 
            <div className="scrolling-text">
             <div className="scrolling-text--item outline-text--true"><span>TRIATHLON</span></div>
             <div className="scrolling-text--item outline-text--false"><span>TRIATHLON</span></div>
             <div className="scrolling-text--item outline-text--false"><span>TRIATHLON</span></div>
             <div className="scrolling-text--item outline-text--false"><span>TRIATHLON</span></div></div>
			
            <div className="scrolling-text">
             <div className="scrolling-text--item outline-text--true"><span>TRIATHLON</span></div>
             <div className="scrolling-text--item outline-text--false"><span>TRIATHLON</span></div>
             <div className="scrolling-text--item outline-text--false"><span>TRIATHLON</span></div>
             <div className="scrolling-text--item outline-text--false"><span>TRIATHLON</span></div></div>

        </div>
      </div>
    </div>
      <div className='qrcode'>
        <div className='qrcodecard'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img src={qrcode} className='code'/>
        </div>
        <div class="hero-button">
            <a id="hero-register-link" target="_blank" href="https://unstop.com/hackathons/innerve-hacks-2023-igdtuw-delhi-784324">
              <button class="hero-register">REGISTER HERE!</button>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Title
