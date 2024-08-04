import IMission from "@/src/models/IMission";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  selectedMission: IMission | null;
};

const initialState: InitialState = {
  selectedMission: null,
};

const selectedMissionSlice = createSlice({
  name: "selectedMission",
  initialState,
  reducers: {
    setSelectedMission: (state, action: PayloadAction<IMission>) => {
      state.selectedMission = action.payload;
    },
    clearSelectedMission: (state) => {
      state.selectedMission = null;
    },
  },
});

export const { setSelectedMission, clearSelectedMission } =
  selectedMissionSlice.actions;
export default selectedMissionSlice.reducer;
