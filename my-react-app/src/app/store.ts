import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/iceCream/iceCreamSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;


