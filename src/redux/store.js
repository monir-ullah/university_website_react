import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // local storage by default
import rootReducer from "./reducers";

// Persist config to determine which reducer should be persisted
const persistConfig = {
  key: "root", // The key in localStorage
  storage, // Default is localStorage
  whitelist: ["user"], // List of reducers you want to persist (for example, 'auth' reducer)
};

// Wrap your rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor object to manage the rehydration of the store
const persistor = persistStore(store);

export { store, persistor };
