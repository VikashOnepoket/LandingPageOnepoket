// productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../api/api'; // Adjust the import based on your API setup

const initialState = {
    category: [],
    status: 'idle',
    error: null,
};

export const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
    async (token, { rejectWithValue }) => {
        try {
            const response = await axios.get('/get_all_category', {
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

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        clearCategory: (state) => {
            state.category = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.category = action.payload;
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setCategory, clearCategory } = categorySlice.actions;
export default categorySlice.reducer;
