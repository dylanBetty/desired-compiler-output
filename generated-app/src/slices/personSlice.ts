import { createSlice } from "@reduxjs/toolkit";

export type Person = {
  name: string;
  id: string;
};

const initialState: Person = {
  name: "",
  id: "",
};

export type PersonAction = {
  payload: {
    name: string;
    id: string;
  };
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setPerson(state, action: PersonAction) {
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
      };
    },
  },
});

export const { setPerson } = personSlice.actions;
export default personSlice.reducer;
