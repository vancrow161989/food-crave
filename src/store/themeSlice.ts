import { createSlice } from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "@/entities/StoreTypes";

const initialState = {
  isDarkMode: false
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    darkModeTurnOn: (theme, _) => {
      theme.isDarkMode = true;
    },
    darkModeTurnOff: (theme, _) => {
      theme.isDarkMode = false;
    }
  }
});

const { darkModeTurnOn, darkModeTurnOff } = themeSlice.actions;

export default themeSlice.reducer;

export const turnOnDarkMode = (dispatch: AppDispatch) => {
  return dispatch(darkModeTurnOn({}));
};

export const turnOffDarkMode = (dispatch: AppDispatch) => {
  return dispatch(darkModeTurnOff({}));
};
