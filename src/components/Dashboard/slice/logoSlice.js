// productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../api/api'; // Adjust the import based on your API setup

const initialState = {
    logo: [],
    status: 'idle',
    error: null,
};

export const fetchLogo = createAsyncThunk(
    'logo/fetchLogo',
    async (token, { rejectWithValue }) => {
        try {
            const response = await axios.get('/get_all_logo', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
            // return Promise.reject(error);

        }
    }
);

const logoSlice = createSlice({
    name: 'logo',
    initialState,
    reducers: {
        setLogo: (state, action) => {
            state.logo = action.payload;
        },
        clearLogo: (state) => {
            state.logo = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLogo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.logo = action.payload;
               
            })
            .addCase(fetchLogo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setLogo, clearLogo } = logoSlice.actions;
export default logoSlice.reducer;
