import {createSlice,PayloadAction} from "@reduxjs/toolkit";

interface ReservationState{
    value:string[]
}

const initialState:ReservationState={
    value:[]
}

export const reservationSlice=createSlice({
    name:"reservations",
    initialState,
    reducers:{
        addreservation:(state,action:PayloadAction<string>)=>{
            state.value.push(action.payload)
        },
        removereservation:(state,action:PayloadAction<number>)=>{
            state.value.splice(action.payload,1)
        }
    },
})
// we always export reducer from the slice
// creation of slice are the part of the redux toolkit which helps us to simplify the steps so that we can skip writting the action creators and reducers seperately for each element
export default reservationSlice.reducer
export const {addreservation,  removereservation} =reservationSlice.actions;