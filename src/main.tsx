import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import router from "@/routing/routes.tsx";
import configureStore from "./store/configureStore";
import "@/index.css";

export const store = configureStore();

setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
