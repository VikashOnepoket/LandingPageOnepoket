// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from '../slice/authSlice';
 // Adjust the path as needed
import productDetailsReducer from '../slice/productSlice'
import logoDetailsReducer from '../slice/logoSlice'
import categoryDetailsReducer from '../slice/categorySlice'

import userDetailsReducer from '../slice/userDetailsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    productDetails: productDetailsReducer,
    logoDetails: logoDetailsReducer,
    categoryDetails: categoryDetailsReducer,
    userDetails: userDetailsReducer,
    // Add more reducers here as needed
  },
});

export const persistor = persistStore(store);
export default store;
