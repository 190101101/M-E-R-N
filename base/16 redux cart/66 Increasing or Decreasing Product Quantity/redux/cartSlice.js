import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartItems:[],
        total:0,
        tax:8,
    },
    reducers:{
        addProduct: (state, action) => {
            const findCartItem = state.cartItems.find(
                (item) => item._id === action.payload._id
            );

            if(findCartItem){
                findCartItem.quantity = findCartItem.quantity + 1;
            }else{
                state.cartItems.push(action.payload);
            }

            state.total += action.payload.price;
        },
        deleteCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item._id !== action.payload._id
            );

            state.total -= action.payload.price * action.payload.quantity;
        },
        increment: (state, action) => {
            const cartItem = state.cartItems.find(
                (item) => item._id === action.payload._id
            );
            cartItem.quantity += 1;
            state.total += cartItem.price;

            if(cartItem){
                cartItem.quantity = cartItem.quantity + 1;
                state.total += action.payload.price;
            }
        },
        decrement: (state, action) => {
            const cartItem = state.cartItems.find(
                (item) => item._id === action.payload._id
            );
            
            cartItem.quantity -= 1;

            if(cartItem.quantity === 0){
                state.cartItems = state.cartItems.filter(
                    (item) => item._id !== action.payload._id
                );                
            }

            state.total -= cartItem.price;
        },
        drop: (state, action) => {
            
        }
    }
});

export const {addProduct, deleteCart, increment, decrement} = cartSlice.actions;

export default cartSlice.reducer;
