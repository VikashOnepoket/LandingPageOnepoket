import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInSuccess: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
        },
        signOutSuccess: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            
        },
    },
});

export const { signInSuccess, signOutSuccess } = authSlice.actions;

export default authSlice.reducer;
