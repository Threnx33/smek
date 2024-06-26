import { Collection } from "@/pages/badges/badgesCollections/data";
import { EarnerBadges } from "@/pages/badges/badgesEarners/data";
import { Template } from "@/pages/badges/badgesTemplates/data";
import { EarnerCertificates } from "@/pages/certificates/certificatesEarners/data";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface PageState {
  template: Template | undefined;
  earner: EarnerBadges | EarnerCertificates | undefined;
  collection: Collection | undefined;
}

const initialState: PageState = {
  template: undefined,
  earner: undefined,
  collection: undefined,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<Template>) => {
      state.template = action.payload;
    },
    setEarner: (
      state,
      action: PayloadAction<EarnerBadges | EarnerCertificates>
    ) => {
      state.earner = action.payload;
    },
    setCollection: (state, action: PayloadAction<Collection>) => {
      state.collection = action.payload;
    },
  },
});

export const { setTemplate, setEarner, setCollection } = pageSlice.actions;

export default pageSlice.reducer;
