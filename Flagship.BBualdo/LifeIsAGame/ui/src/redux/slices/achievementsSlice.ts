import IAchievement from "@/src/models/IAchievement";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  achievements: IAchievement[] | null | undefined;
};

const initialState: InitialState = {
  achievements: undefined,
};

const achievementsSlice = createSlice({
  name: "achievements",
  initialState,
  reducers: {
    setAchievements: (state, action: PayloadAction<IAchievement[]>) => {
      state.achievements = action.payload;
    },
    clearAchievements: (state) => {
      state.achievements = null;
    },
  },
});

export const { setAchievements, clearAchievements } = achievementsSlice.actions;
export default achievementsSlice.reducer;
