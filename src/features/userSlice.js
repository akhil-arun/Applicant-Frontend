import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = "http://localhost:4000/awesome/applicant"

const initialState = {
    info : {},
    isLoading: true
}

export const getUserInfo = createAsyncThunk(
    'UserInfo',
    async(name, thunkAPI) => {
        try{
            const resp = await axios(URL,{
                params: {
                    id: 1
                }
            })
            return resp.data.queryResult[0]
        }
        catch(error){
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserInfo.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.isLoading = false
                state.info = action.payload
            })
            .addCase(getUserInfo.rejected, (state, action) => {
                console.log(action)
                state.isLoading = false
            })
    }
})

export default userSlice.reducer;
