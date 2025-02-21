import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import * as R from './reducers';
import api from '../services/api';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'tokenJwt', 'isFollowers', 'currentPost'],
};

const rootReducer = combineReducers({
  auth: R.auth,
  user: R.user,
  tokenJwt: R.tokenJwt,
  popUpExit: R.popUpExit,
  publicationModal: R.publicationModal,
  isFollowers: R.isFollowers,
  currentPost: R.currentPost,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootReducer = ReturnType<typeof store.getState>;
