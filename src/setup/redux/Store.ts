import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer, rootSaga } from "./RootReducer";
import { persistStore } from "redux-persist";
import { reduxBatch } from "@manaflair/redux-batch";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
  enhancers: [reduxBatch],
});

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
