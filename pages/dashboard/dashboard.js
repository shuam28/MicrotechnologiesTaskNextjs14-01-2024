import React from 'react'
import Cards from '../cards/cards ';
import Form from '../form/form';
import styles from '../../styles/dashboard.module.css'
import { FaPhoneAlt } from 'react-icons/fa';
function dashboard() {

  const textItems = ['Most EASY PREMIUM WEB DESIGN PROCESS', 'RESEARCH & DEVELOPMENT BEFORE STARTING', 'MAKING A QUALITY DESIGN IDEAS', 'MAKING A QUALITY DESIGN IDEAS', 'MAKING A QUALITY DESIGN IDEAS'];

  return (
    <div style={{ backgroundColor: "#0a0a0b" }}>
      <div style={{ marginTop: '60px', color: 'white' }}>
        <div>
          {/* ////////////////////second////// */}
          <div style={{ display: 'flex' }}>
            <div>
              <h1 style={{ marginTop: '90px', marginLeft:"90px", fontWeight:'bold',  fontSize: '60px'  }}>TRANSFORMING IDEAS
                <br />
                INTO
                <span style={{ color: '	#FFA500',}}> POWER SOLUTIONS</span></h1>
              <p style={{  marginLeft:"90px",fontFamily: "Lucida Console", }}>FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC 
                <br/>  DIGITAL MARKETING STRATEGIES.  PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.</p>

                <div style={{marginTop:"45px",  marginLeft: "90px", display: "flex", alignItems: "center" }}>
  <div style={{ position: "relative" }}>
    <button style={{ position: "absolute", left: 1,top:1, bottom:1,right:270, backgroundColor: '#e6631d', border: 'none', padding: '2px' }}>
      <FaPhoneAlt style={{ color: 'blue', fontSize: '20px' }} />
    </button>
    <input
      type='search'
      placeholder='Get a Free Consulting' className='text-center'
      style={{ height: '40px', width: '300px', backgroundColor: '#000000', color: 'blue', border: 'none', paddingLeft: '30px' }}
    />
  </div>
</div>


            
            </div>
            <div>
              <img
                className={styles.carouselimage}
                src="/logo.png"
                alt=""
              />
            </div>
          </div>
          <hr style={{marginTop:"120px"}} />
          {/* ////////////////////second////// */}
          <div style={{marginTop:"100px", marginLeft:"85px"}}>
            <div style={{ display: 'flex'  }}>
              <div>
                <h1 style={{color:"	#FFA500"}}>WE PROVIDE THE BEST WEB SERVICES</h1>
                <p style={{fontFamily: "Lucida Console",}}>FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC </p>
                  <p>DIGITAL MARKETING STRATEGIES. PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.</p>
                <div>
                  <ul>
                    {textItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <img
                  className={styles.carouselimage1}
                  src="/second1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <hr style={{marginTop:"0px"}} />
          {/* ////////////////////third////// */}
          <div>
            <h1 style={{ fontWeight: 'bold', textAlign: 'center',fontSize: '60px', color:"	#FFA500",}}>SERVICES WE'RE OFFERING</h1>
            <div ><Cards /></div>
          </div>
          {/* ////////////////////last////// */}
          <div >
            <h1 style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '200px',fontSize: '80px', color:"	#FFA500"}}>CONTACT US</h1>
            <div style={{ display: 'flex', marginTop:'100px' }}>
              <div style={{marginLeft:"80px", marginBottom:"100px", marginTop:"0px"}}>
                <img
                  className={styles.fimage}
                  src="/formimage.png"
                  alt=""
                />
              </div>
              <div style={{marginTop:"120px"}}>
                <Form /> 
              </div>
            </div>
            <h6  style={{ textAlign: 'center', color:"	#FFA500"  }}>COPYRIGHT 2021 MICRO TECHNOLOGIES ALL RIGHT RESERVED</h6>
          </div>


        </div>
      </div>
    </div>
  )
}

export default dashboard