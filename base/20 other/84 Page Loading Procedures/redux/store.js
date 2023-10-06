import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice';
import searchSlice from './searchSlice';

export default configureStore({
    reducer:{
        cart: cartSlice,
        search: searchSlice,
    }
});