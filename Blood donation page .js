import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const BloodD=()=>{   
      const[data,setData]= useState([]);
      useEffect(()=>{
        fetch('http://localhost:3001/form1').then(response=> response.json())
        .then(data=>setData(data));
      },[]);
     return(
      <div className='bloodDonationCss'>
        <h1><center>Blood Donation Page</center></h1>
        <center>
        <Link to='/Form1'>Blood Request Form</Link>
        </center> 
        <hr/>
        {data.map((item) => {
          return (<div>
          <table border="1" cellspacing="2" cellpadding="10" width="100%" height="100">
            <tr> <tr>
{item && item.gender === 'female' && <img src='images/female.jpeg' width="150"height="200"alt="img"/>}
              {item && item.gender === 'male' && <img src='images/male.jpeg' width="150"height="200"alt="img"/>}
              </td>
              <th align="left" valign="top"><br/>Patient Name : {item.pName}
                <br/><br/><br/>Blood Type : {item.bType}<br/><br/><br/>
                No of units required : {item.units}<br/><br/><br/>
                Contact Number : {item.cNo}<br/><br/>
              </th> </tr>        
          </table>
           </div>
         )})}
       </div>
   ); }
export default BloodD
