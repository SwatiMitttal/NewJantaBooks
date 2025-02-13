import React, { useState } from "react";

import {twilio}  from 'twilio'



function Vphone() {

    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const client = twilio(accountSid, authToken)
    const [v,setV]=useState('')
    async function cv() {
        const ver = await client.verify.v2
          .services("VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
          .verifications.create({
            channel: "sms",
            to: "919899219961",
          });
        setV(ver.accountSid)
        console.log(ver.accountSid);
        console.log(ver.status);
       // createVerification();
      }
      
    return(
 <>
 <button onClick={cv}>VERITY</button>
   <p>{v}</p>
 </>
    )
}

export default Vphone





 

