import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:'login',
    initialState:{
        otpDefault : 1234,
        result:false
    },

    reducers:{
        validateOtp:(state, action) => {
            let val = Number(action.payload.join(''));
            if(Number(action.payload.join('')) === state.otpDefault){
                state.result = true 
            }
            else{
                state.result = false
            }
        }
    }
})

export const {validateOtp} = loginSlice.actions 
export default loginSlice.reducer