const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  name: '',
  phone: '',
};
const dataSlicer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      // Use immer to create a new state based on the previous state
      return { ...state, ...action.payload };
    },
    setDataInitialState: (state, action) => {
      return { ...initialState };
    },
  },
});
export const { setData, setDataInitialState } = dataSlicer.actions;
export const dataReducer = dataSlicer.reducer;
