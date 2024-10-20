import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import authReducer from "@/src/redux/slices/userSlice";
import achievementsReducer from "@/src/redux/slices/achievementsSlice";
import userAchievementsReducer from "@/src/redux/slices/userAchievementsSlice";
import missionsReducer from "@/src/redux/slices/missionsSlice";
import selectedMissionReducer from "@/src/redux/slices/selectedMissionSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  authReducer,
  achievementsReducer,
  userAchievementsReducer,
  missionsReducer,
  selectedMissionReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
