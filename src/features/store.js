import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo/todoSlice";

const store = configureStore({
  reducer: todoSlice,
});

export default store;
