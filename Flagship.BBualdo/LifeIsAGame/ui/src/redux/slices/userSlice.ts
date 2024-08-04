import IUser from "@/src/models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUserXpResponse from "@/src/services/DTO/IUserXpResponse";
import IEditProfileDto from "@/src/services/DTO/IEditProfileDto";

type InitialState = {
  user: IUser | null | undefined;
  isLoggedOut: boolean;
};

const initialState: InitialState = {
  user: undefined,
  isLoggedOut: true,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setIsLoggedOut: (state, action: PayloadAction<boolean>) => {
      state.isLoggedOut = action.payload;
    },
    setUserXp: (state, action: PayloadAction<IUserXpResponse>) => {
      const { level, xp, totalXpGained } = action.payload;
      if (state.user) {
        state.user = { ...state.user, level, xp, totalXpGained };
      }
    },
    setUserMissionsCounters: (state, action: PayloadAction<string>) => {
      if (state.user) {
        if (action.payload === "ADD_MISSION") state.user.totalMissionsAdded++;
        if (action.payload === "COMPLETE_MISSION")
          state.user.totalMissionsCompleted++;
      }
    },
    updateUserInfo: (state, action: PayloadAction<IEditProfileDto>) => {
      if (state.user) {
        const { firstName, lastName, currentGoal, bio, username } =
          action.payload;
        state.user = {
          ...state.user,
          firstName,
          lastName,
          currentGoal,
          bio,
          username,
        };
      }
    },
    setUserAvatar: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.avatarUrl = action.payload;
      }
    },
    setUserProviderId: (
      state,
      action: PayloadAction<"Github" | "Google" | "Facebook">,
    ) => {
      if (state.user) {
        const provider = action.payload;

        switch (provider) {
          case "Github":
            state.user.githubId = "secret";
            break;
          case "Facebook":
            state.user.facebookId = "secret";
            break;
          case "Google":
            state.user.googleId = "secret";
            break;
        }
      }
    },
    clearUserProviderId: (
      state,
      action: PayloadAction<"Github" | "Google" | "Facebook">,
    ) => {
      if (state.user) {
        const provider = action.payload;
        switch (provider) {
          case "Github":
            state.user.githubId = undefined;
            break;
          case "Facebook":
            state.user.facebookId = undefined;
            break;
          case "Google":
            state.user.googleId = undefined;
            break;
        }
      }
    },
  },
});

export default userSlice.reducer;
export const {
  setUser,
  clearUser,
  setIsLoggedOut,
  setUserXp,
  setUserMissionsCounters,
  updateUserInfo,
  setUserAvatar,
  setUserProviderId,
  clearUserProviderId,
} = userSlice.actions;
