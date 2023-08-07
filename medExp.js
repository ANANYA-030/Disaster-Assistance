import { Link } from 'react-router-dom';
import ExpenseComponent from './ExpenseComponent';
import {useState,useEffect} from 'react';

const MedExp= () => {

 
    const[data1,setData1]= useState([]);
  useEffect(()=>{
    fetch('http://localhost:3001/form2').then(response=> response.json())
    .then(data1=>setData1(data1));
  },[]);
    return(
      <div className='medCss'>
        <h1><center>Medical Expense coverage through fund raising</center></h1>
        <hr/>
        <center>
        <Link to='/Form2'>Medical Expense Coverage Request Form</Link>
       
        <hr/>
        {data1.map((item) => {
               return <ExpenseComponent item={item}/>
        })}
        </center>
       
      </div>
   );
  }

export default MedExp


