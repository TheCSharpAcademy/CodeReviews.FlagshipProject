import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import selectedMissionReducer from "./slices/selectedMissionSlice";
import userReducer from "./slices/userSlice";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  userReducer,
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
