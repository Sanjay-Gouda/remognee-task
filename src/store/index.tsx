import { configureStore } from "@reduxjs/toolkit";

import userData from "./slices/userData";

const store = configureStore({
  reducer: {
    userData,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
