import React from 'react'
import { useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

const DonationPage=()=>{
 
   const [itemQuantity, setItemQuantity] = useState([])
  const [cartTotal, setCartTotal] = useState(0);
 

  const location = useLocation();
  const ItemsList  = location.state.itemsList;

  const handleItemQuantity = (ev, item) => {
    const obj = item;
   
    obj.value = ev ? ev : 0;
    const filteredList = itemQuantity.filter((val) => val.name !== item.name)
    setItemQuantity([...filteredList, obj]);
    }
     
  const calcTotal = () => {
    let total = 0
 
    itemQuantity.length && itemQuantity.map((item) => {
      const obj = ItemsList.find((val) => item.name === val.name)
      if(obj && obj.quantity>=item.value && item.value>=0) {
        total += obj.amount * item.value
      }    
      setCartTotal(total);
    })
  }

  useEffect(()=> {
    calcTotal();
  }, [itemQuantity])
 
  return(
    <div className="input">
      <h1 className='heading'>Food items to donate</h1>
      <hr/>
    <div className='products'>
     
      {ItemsList.map((item) => {
        return (
          <div className='card' >
            <div><img src={item.path}  width="300"height="300"alt="img"/></div>
           
            <div>Name: {item.name}</div>
            <div>Quanity Required: {item.quantity}</div>
            <div>Amount per quantity: {item.amount}</div>
           
          </div>
        )
      })}
    </div>

    <h2>Enter quantity you want to donate</h2>
    {ItemsList.map((items)=>{
     
        return(
          <div>
          <h3>{items.name}:</h3>
          <input type="number"
                 onChange={(ev) => handleItemQuantity(ev.target.value, items)}
                 autoComplete="off" />
          </div>
        )
       
    })}
    <br/>
    <div>Total: {cartTotal}</div>
    <Link to="/Payment2"
                state={{amtToPay:cartTotal}}
              >Proceed to donate</Link>
<br/>  
</div>
    );
    }
export default DonationPage
