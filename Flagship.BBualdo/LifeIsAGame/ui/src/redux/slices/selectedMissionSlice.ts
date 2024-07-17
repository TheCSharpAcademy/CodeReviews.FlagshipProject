import { MissionSchema } from "@/src/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  selectedMission: MissionSchema | null;
};

const initialState: InitialState = {
  selectedMission: null,
};

const selectedMission = createSlice({
  name: "selectedMission",
  initialState,
  reducers: {
    setSelectedMission: (
      state,
      action: PayloadAction<MissionSchema | null>,
    ) => {
      state.selectedMission = action.payload;
    },
  },
});

export const { setSelectedMission } = selectedMission.actions;
export default selectedMission.reducer;
