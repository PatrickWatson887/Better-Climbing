import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CoachSearchState {
  query: string
  coaches: any
  selectedCoach: any
}

const initialState: CoachSearchState = {
  query: '',
  coaches: [],
  selectedCoach: {}
} as const;

const coachSearchSlice = createSlice({
  name: 'coachSearch',
  initialState,
  reducers: {
    searchCoaches: (
      state,
      action: PayloadAction<string>
    ) => {
      state.query = action.payload
    },
    setSelectedCoach: (
      state,
      action: PayloadAction<string>
    ) => {
      state.selectedCoach = action.payload
    },
  },
});


export const { searchCoaches, setSelectedCoach } = coachSearchSlice.actions;

export default coachSearchSlice.reducer;