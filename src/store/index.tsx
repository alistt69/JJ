import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/auth/authSlice.ts';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { userApi } from "@/api/auth";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch);