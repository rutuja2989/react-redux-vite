import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addfoodtocustomer } from '../features/componentSlice';
interface CustomerCardTypes{
    id:string;
    name:string;
    food:string[];
}
export default function Customercard({id,name,food}:CustomerCardTypes) {
const [customerInput, setcustomerInput] = useState("");
const dispatch=useDispatch()
  return (
    <div>
      <div className="customer-food-card-container">
<p>{name}</p>
<div className="customer-foods-container">
  <div className="customer-food">
 {food.map((food)=>{
    return <p> {food} </p>
 })}
  </div>
  <div className="customer-food-input-container">
    <input value={customerInput} onChange={(e)=>setcustomerInput(e.target.value)}/>
    <button onClick={()=>{
        if(!customerInput){
            return 
        }
        dispatch(addfoodtocustomer({
            id,
            food:customerInput
        }))
        setcustomerInput('')
    }}>Add</button>
  </div>
</div>
</div>
    </div>
  );
}
