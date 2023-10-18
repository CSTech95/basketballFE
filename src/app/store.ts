import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import { ballDontLieApi } from "../features/counter/nba-query"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [ballDontLieApi.reducerPath]: ballDontLieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ballDontLieApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
