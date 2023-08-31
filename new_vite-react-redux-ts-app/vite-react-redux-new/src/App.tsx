import React, { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import "./App.css";
import { RootState } from "./app/store";
import Customercard from "./components/Customercard";
import ReservationCard from "./components/ReservationCard";
import { addreservation } from "./features/reservationSlice";
// import ComponentSlice from "./features/componentSlice";

function App() {
  const [reservationStateInput,setreservationStateInput]=useState("")
  const customers=useSelector((state:RootState)=>state.customers.value)
  const reservation=useSelector((state:RootState)=>state.reservations.value)
  const dispatch=useDispatch()
  
  const handleAddReservation=()=>{
    if(!reservationStateInput){
      return
    }
   dispatch(addreservation(reservationStateInput));
   setreservationStateInput(" ")
  }
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              <div className="reservation-card-container">
                {reservation.map((name,index)=>{
                  return <ReservationCard name={name} index={index} />
                })}
              </div>
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationStateInput} onChange={(e)=>setreservationStateInput(e.target.value)}/>
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map(customers=>{
            return <Customercard id={customers.id} name={customers.name} food={customers.food} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;