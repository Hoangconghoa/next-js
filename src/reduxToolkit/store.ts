import { configureStore } from "@reduxjs/toolkit";
import userRedux from "../slice/UserSlice";
export function makeStore() {
  return configureStore({
    reducer: {
      user: userRedux,
    },
  });
}
export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
