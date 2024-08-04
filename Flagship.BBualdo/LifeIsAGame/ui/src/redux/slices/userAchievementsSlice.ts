import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUserAchievement from "@/src/models/IUserAchievement";

type InitialState = {
  userAchievements: IUserAchievement[] | null | undefined;
};

const initialState: InitialState = {
  userAchievements: undefined,
};

const userAchievementsSlice = createSlice({
  name: "userAchievements",
  initialState,
  reducers: {
    setUserAchievements: (state, action: PayloadAction<IUserAchievement[]>) => {
      state.userAchievements = action.payload;
    },
    clearUserAchievements: (state) => {
      state.userAchievements = null;
    },
    unlockAchievement: (state, action: PayloadAction<IUserAchievement>) => {
      if (state.userAchievements) state.userAchievements.push(action.payload);
    },
  },
});

export const { setUserAchievements, clearUserAchievements, unlockAchievement } =
  userAchievementsSlice.actions;
export default userAchievementsSlice.reducer;
