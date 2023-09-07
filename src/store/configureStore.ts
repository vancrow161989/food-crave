import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

export default function () {
  return configureStore({
    reducer: {
      theme: themeReducer
    },
    devTools: true
  });
}
