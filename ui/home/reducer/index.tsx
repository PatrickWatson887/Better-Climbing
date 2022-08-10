import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HomeState {
  query: string
}

const initialState: HomeState = {
  query: '',
} as const;

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setQuery: (
      state,
      action: PayloadAction<string>
    ) => {
      state.query = action.payload;
    }
  },
});

export const { setQuery } = homeSlice.actions;

export default homeSlice.reducer;