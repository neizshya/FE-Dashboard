import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import usersSlice from "./Slice/usersSlice";
import paymentMethodsSlice from "./Slice/paymentMethodsSlice";
import trainingSlice from "./Slice/trainingSlice";
import recomendedSlice from "./Slice/recomendedSlice";
import tokenSlice from "./Slice/tokenSlice";
import adminSlice from "./Slice/adminSlice";
import offlineClassSlice from "./Slice/offlineClassSlice";
import classOnlineSlice from "./Slice/classOnlineSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  users: usersSlice,
  paymentMethod: paymentMethodsSlice,
  training: trainingSlice,
  onlineClass : classOnlineSlice,
  offlineClass : offlineClassSlice,
  recomended: recomendedSlice,
  tokenAuth : tokenSlice,
  admin : adminSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer };
