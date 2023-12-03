import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Template } from "@/components/views/viewBadges/viewBadgesTemplates/data";
import { Earner } from "@/components/views/viewBadges/viewBadgesEarners/data";

export interface PageState {
  template: Template | undefined;
  earner: Earner | undefined;
}

const initialState: PageState = {
  template: undefined,
  earner: undefined,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<Template>) => {
      state.template = action.payload;
    },
    setEarner: (state, action: PayloadAction<Earner>) => {
      state.earner = action.payload;
    },
  },
});

export const { setTemplate, setEarner } = pageSlice.actions;

export default pageSlice.reducer;
