import IMission from "@/src/models/IMission";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUpdateMissionDto from "@/src/services/DTO/IUpdateMissionDto";

type InitialState = {
  missions: IMission[] | null | undefined;
};

const initialState: InitialState = {
  missions: undefined,
};

const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    setMissions: (state, action: PayloadAction<IMission[]>) => {
      state.missions = action.payload;
    },
    clearMissions: (state) => {
      state.missions = null;
    },
    addMission: (state, action: PayloadAction<IMission>) => {
      state.missions?.unshift(action.payload);
    },
    updateMission: (state, action: PayloadAction<IUpdateMissionDto>) => {
      if (state.missions) {
        const { id, title, description, subtasks } = action.payload;
        const missionToUpdate = state.missions.find((m) => m.id === id);

        if (missionToUpdate) {
          const updatedMission: IMission = {
            ...missionToUpdate,
            title,
            description,
            subtasks,
          };

          const missionIndex = state.missions.findIndex((m) => m.id === id);
          const updatedMissions = [...state.missions];
          updatedMissions[missionIndex] = updatedMission;

          state.missions = updatedMissions;
        }
      }
    },
    deleteMission: (state, action: PayloadAction<{ missionId: string }>) => {
      if (state.missions) {
        const { missionId } = action.payload;
        const missionToDelete = state.missions.find((m) => m.id === missionId);
        if (missionToDelete) {
          state.missions = state.missions.filter((m) => m !== missionToDelete);
        }
      }
    },
    toggleSubtask: (
      state,
      action: PayloadAction<{ missionId: string; subtaskId: string }>,
    ) => {
      if (state.missions) {
        const { missionId, subtaskId } = action.payload;
        const mission = state.missions.find((m) => m.id === missionId);
        if (mission) {
          mission.subtasks = mission.subtasks.map((st) =>
            st.id === subtaskId ? { ...st, isCompleted: !st.isCompleted } : st,
          );
        }
      }
    },
    completeMission: (state, action: PayloadAction<{ missionId: string }>) => {
      if (state.missions) {
        const { missionId } = action.payload;
        const mission = state.missions.find((m) => m.id === missionId);
        state.missions = state.missions.map((m) =>
          m === mission
            ? { ...m, isCompleted: true, completedAt: new Date() }
            : m,
        );
      }
    },
  },
});

export const {
  setMissions,
  clearMissions,
  addMission,
  updateMission,
  deleteMission,
  toggleSubtask,
  completeMission,
} = missionsSlice.actions;
export default missionsSlice.reducer;
