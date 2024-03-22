import { createSlice } from '@reduxjs/toolkit';

export const storeSlice = createSlice({
    name: 'fakeStore',
    initialState: {
        product: []
    },
    reducers: {
        getProduct: ( state, action ) => {
            console.log(action);
            state.product = action.payload
        }    
    }
});


// Action creators are generated for each case reducer function
export const { getProduct } = storeSlice.actions;