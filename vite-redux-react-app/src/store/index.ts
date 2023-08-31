// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
export const store=configureStore({
  reducer:{
        treducer:taskReducer,
  },
})

export type Rootstate=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;