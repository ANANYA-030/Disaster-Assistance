import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Payment=()=>{
  const location = useLocation();
  const list  = location.state.List;
  const Amount = location.state.amtToPay;
  const [cardNo, setCardNo] = useState()
  const[cvv,setcvv]=useState();
  const navigate = useNavigate();
  const [status,setStatus]=useState('');
  const pay=  (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/cardDetails',
    {cardNumber:cardNo,CVV:cvv,amount:Amount
    } ).then((response)=>{
     const msg=response.data.message;
      if(msg==="Insufficient Balance"){
        setStatus(msg);
      }
      else if(msg==="Incorrect details"){
        setStatus(msg);
      }
      else{
        const totalAmt=parseInt(list.amount,10)-msg;
        console.log(totalAmt);
        axios.post('http://localhost:3001/form2',
       {Name:list.pName,Cause:list.cause,Amount:totalAmt
      })
          navigate('/MedExp');  
      }
    })
    }
 
