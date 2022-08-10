import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux";
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import homeReducer from 'ui/home/reducer';
import coachSearchReducer from 'ui/coachSearch/reducer';
import coachProfileReducer from 'ui/coachProfile/reducer';
import cartReducer from 'ui/cart/reducer';


import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux';

const reducers = combineReducers({
  home: homeReducer,
  coachSearch: coachSearchReducer,
  coachProfile: coachProfileReducer,
  cart: cartReducer
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector