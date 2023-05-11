"use client";

import { configureStore } from "@reduxjs/toolkit";
import { HeightNavBar } from "./features/slices/heightNavBar";

export default configureStore({
  reducer: {
    Height: HeightNavBar.reducer,
  },
});
