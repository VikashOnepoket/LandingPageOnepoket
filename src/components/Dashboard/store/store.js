// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from '../slice/authSlice';
import userDetailsReducer from '../slice/userDetailsSlice'; // Adjust the path as needed
import productDetailsReducer from '../slice/productSlice'
import logoDetailsReducer from '../slice/logoSlice'
import categoryDetailsReducer from '../slice/categorySlice'

const persistConfig = {
  key: 'root',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    userDetails: userDetailsReducer,
    productDetails: productDetailsReducer,
    logoDetails: logoDetailsReducer,
    categoryDetails: categoryDetailsReducer,
    // Add more reducers here as needed
  },
});

export const persistor = persistStore(store);
export default store;
