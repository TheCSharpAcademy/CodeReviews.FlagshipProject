"use client";

import { Provider } from "react-redux";
import { persistor, store } from "@/src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "../app/loading";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
