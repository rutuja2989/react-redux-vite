import React from 'react';
import {useDispatch} from "react-redux"
import { removereservation } from '../features/reservationSlice';
import {addcustomer} from "../features/componentSlice";
import {v4 as uuid} from 'uuid';
interface reservationCardTypes{
  name:string;
  index:number;
}

export default function ReservationCard({name,index}:reservationCardTypes) {
  const dispatch=useDispatch()

  return (
    <div onClick={()=>{
      dispatch(removereservation(index))
      dispatch(addcustomer({
        id:uuid(),
        name,
        food:[]
      }));
    }
    } className='reservation-card-container'>
      {name}
    </div>

)}
