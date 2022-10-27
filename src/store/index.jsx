import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slices";

export default configureStore({
  reducer: {
    user: userSlice
  }
});
