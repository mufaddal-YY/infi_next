import Image from 'next/image'
import React from 'react'
import Saas from '@assets/images/unispark/foundit.png'


const Placement = () => {
  return (
   <>
   <div className="section-container section-sp4 bg-white">
        <div className="container">
          <h4>Placement Partner</h4>
          <div className="d-flex justify-content">
            <div className=''>
            <Image width={250} src={Saas} alt="Infispark" />
            </div>
           
            
          </div>
        </div>
      </div>
      </>
  )
}

export default Placement