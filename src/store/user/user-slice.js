import { createSlice } from "@reduxjs/toolkit";
import { swapItems } from "utils/arrays";

const initialState = {
  user: null,
  loading: true,
  confirmation: false,
  jwtoken: null,
  isConnected: null,
  user_id: null,
  types: [],
  projects: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload: user }) => {
      state.user = user;
    },
    setLoading: (state, { payload: status }) => {
      state.loading = status;
    },
    setJwtoken: (state, { payload: jwtoken }) => {
      state.jwtoken = jwtoken;
    },
    setIsConnected: (state, { payload: status }) => {
      state.isConnected = status;
    },

    setConfirmation: (state, { payload: confirmation }) => {
      state.confirmation = confirmation;
    },

    setUser_id: (state, { payload: user_id }) => {
      state.user_id = user_id;
    },
    setTypes: (state, { payload: types }) => {
      state.types = types;
    },
    setProjects: (state, { payload: projects }) => {
      state.projects = projects;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
