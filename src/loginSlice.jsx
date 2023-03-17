import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:'login',
    initialState:{
        otpDefault : 1234,
    },
    reducers:{
        vaidateOtp:(state, action) => {
            console.log(action.payload)
        }
    }
})

export const {validateOtp} = loginSlice.actions 
export default loginSlice.reducer