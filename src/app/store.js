import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../components/features/auth/auth"
import dashboardReducer from "../components/features/dashboard/dashboardSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
  },
});
