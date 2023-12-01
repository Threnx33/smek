import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Template } from "@/components/views/viewBadges/viewBadgesTemplates/data";

export interface PageState {
  template: Template | undefined;
}

const initialState: PageState = {
  template: undefined,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<Template>) => {
      state.template = action.payload;
    },
  },
});

export const { setTemplate } = pageSlice.actions;

export default pageSlice.reducer;
