import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export const store = configureStore({ reducer: { auth: authReducer } });
// console.log(store)
console.log("initial state",store.getState())
