// store/taskSlice.ts
import {  createAsyncThunk, createSlice,PayloadAction } from '@reduxjs/toolkit';

export interface Tasks{
  id:string
  task:string
}


interface TaskState {
  tasks: Tasks[] ;
  // isloading:boolean;
  // error:string|null;
}

const initialState: TaskState={
  tasks: [],
  // isloading: false,
  // error: null
};

//thunk for creating the element
export const fetchperson=createAsyncThunk("tasks/fetchperson",async () => {
  const response=await fetch("https://64d91395e947d30a2609e3eb.mockapi.io/task",{
    method:"GET",
  });
  try{
    const data= await response.json()
    return data
    }catch(error){
      return error
    }
})

export const savePerson=createAsyncThunk("tasks/savePerson",async(task:string)=>{
const response=await fetch("https://64d91395e947d30a2609e3eb.mockapi.io/task",{
  method:"POST",  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify({
    task
  })
})
try{
const data= await response.json()
return data
}catch(error){
  return error
}
})

export const deletePerson=createAsyncThunk("tasks/deleteperson",async(id:string)=>{
const response=await fetch(`https://64d91395e947d30a2609e3eb.mockapi.io/task/${id}`,{
  method:"DELETE",
});
try{
  const data= await response.json()
  return data
  }catch(error){
    return error
  }
})



// for update new element has to be created 
// export const updateperson=createAsyncThunk("tasks/updateperson",async(data:string)=>{
//   const response=await fetch(`https://64d91395e947d30a2609e3eb.mockapi.io/task/${data.id}`,{
//     method:"DELETE",
//     headers:{
//       "content-type":"application/json"
//     },
//     body:JSON.stringify(data)
//   });
//   try{
//     const data= await response.json()
//     return data
//     }catch(error){
//       return error
//     }
//   })

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Tasks>) => {
    state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks.splice(action.payload, 1);
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchperson.fulfilled,(state,action)=>{
      state.tasks=action.payload
    })
    .addCase(savePerson.fulfilled,(state,action)=>{
   
      state.tasks.push(action.payload)
    })
    .addCase(deletePerson.fulfilled,(state,action)=>{
      const {id}=action.payload
      if(id){
        state.tasks=state.tasks.filter((ele)=>ele.id!==id)
      }
    })
    // .addCase(updateperson.fulfilled,(state,action)=>{  
    //     state.tasks=state.tasks.map((ele)=>(ele.id===action.payload.id ? action.payload: ele))
    // })
  }
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
