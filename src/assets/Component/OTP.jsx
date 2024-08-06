import React from 'react'
import { useState } from 'react'
import '../CSS/OTP.css'

const OTP = () => {
    const[num,setOtp]=useState(null)
const generateotp=()=>{
    const otp=Math.floor(10000 +  Math.random() * 900000);
    setOtp(otp)
}
  return (
    <> 
    <div className="otp-container">

      <h1>Generated OTP: {num}</h1>
      <button onClick={generateotp}>GenerateOtp</button>
      </div>
    </>
  )
}

export default OTP 
