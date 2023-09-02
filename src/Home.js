import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Map from './Map'



function Home(){


  return(
    <>
    <div style={{width:"100vw", height:"100vh"}}>


      <Map />
      

    </div>
    </>
  )
}

export default Home;
