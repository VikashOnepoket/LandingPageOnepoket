// productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../api/api'; // Adjust the import based on your API setup

const initialState = {
    products: [],
    status: 'idle',
    error: null,
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ({ token, filter_by_category, filter_by_date, start_date, end_date }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                '/all_product_lp',
                { filter_by_category, filter_by_date, start_date, end_date }, // Body payload
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Bearer token in headers
                    },
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        clearProducts: (state) => {
            state.products = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setProducts, clearProducts } = productsSlice.actions;
export default productsSlice.reducer;
