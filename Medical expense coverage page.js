import { Link } from 'react-router-dom';
import {useState} from 'react';

const ExpenseComponent = ({
  item
}) => {
  const [amt, setAmt] = useState() 
    return(
          <div>
          <table border="1" cellspacing="2" cellpadding="10" width="100%" height="100">          
            <tr>
            <td>
              {item && item.gender === 'female' && <img src='images/female.jpeg' width="150"height="200"alt="img"/>}
              {item && item.gender === 'male' && <img src='images/male.jpeg' width="150"height="200"alt="img"/>}
              </td>
              <th align="left" valign="top"><br/>Patient Name : {item.pName}
                <br/><br/><br/>Cause: {item.cause}<br/><br/><br/>
                Amount to be raised: {item.amount}<br/><br/><br/>
                <label>Enter amount to donate: </label>
                <input type="number"
                 onChange={(ev) => setAmt(ev.target.value)}
                 autoComplete="off" />
             <br/><br/>          
             <Link to="/Payment"
                state={
                  {List: item,amtToPay:amt}
             }
              >Proceed to donate</Link>
              <br/>
              </th>
            </tr>        
          </table>
          <br/>
          </div>
         )
  }

export default ExpenseComponent;
