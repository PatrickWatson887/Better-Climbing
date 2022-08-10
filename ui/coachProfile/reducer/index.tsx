import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CoachProfileState {
  item: any
}

const initialState: CoachProfileState = {
  item: []
} as const;

const coachProfileSlice = createSlice({
  name: 'coachProfile',
  initialState,
  reducers: {
    setItems: (
      state,
      action: PayloadAction<string>
    ) => {
      state.item = action.payload
    },
  },
});


export const { setItems } = coachProfileSlice.actions;

export default coachProfileSlice.reducer;