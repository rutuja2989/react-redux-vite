import {createSlice,PayloadAction} from "@reduxjs/toolkit";

interface customerState{
    value:customer[]
}

interface customer{
    id:string,
    name:string,
    food:string[]
}

interface addFoodToCustomerPayload{
    id:string,
    food:string
}
const initialState:customerState={
    value:[]
}

export const customerSlice=createSlice({
    name:"customers",
    initialState,
    reducers:{
     addcustomer:(state,action:PayloadAction<customer>)=>{
        state.value.push(action.payload)
     },
    addfoodtocustomer:(state, action:PayloadAction<addFoodToCustomerPayload>)=>{
        state.value.forEach((customer)=>{
            if(customer.id === action.payload.id){
                customer.food.push(action.payload.food)
            }
        })
    }
    },
})
// we always export reducer from the slice
// creation of slice are the part of the redux toolkit which helps us to simplify the steps so that we can skip writting the action creators and reducers seperately for each element
export default customerSlice.reducer
export const {addcustomer, addfoodtocustomer} =customerSlice.actions;