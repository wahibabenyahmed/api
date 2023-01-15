import {createSlice} from "@reduxjs/toolkit"

const initialState={
    list:[]
}
const UserSlice = createSlice({
    name:'userSlice',
    initialState,
reducers:{
sendData:(state,action)=>{
    state.list=action.payload
}

}})


export const {sendData}=UserSlice.actions
export default UserSlice.reducer