import { configureStore } from "@reduxjs/toolkit";
import userReduce from "../features/counter/UserSlice";
export const store = configureStore({
  reducer: {
    user: userReduce,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
