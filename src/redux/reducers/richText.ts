import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface TextProps {
  fontStyle: string | null;
  fontSize: string | null;
  bold: string | null;
  italic: string | null;
  underline: string | null;
  alignment: string | null;
}

const initialState: TextProps = {
  fontStyle: null,
  fontSize: null,
  bold: null,
  italic: null,
  underline: null,
  alignment: null,
};

export const richTextSlice = createSlice({
  name: "richText",
  initialState,
  reducers: {
    setTextProps: (state, action: PayloadAction<TextProps>) => {
      return action.payload;
    },
    clearTextProps: (state) => initialState,
  },
});

export const { setTextProps, clearTextProps } = richTextSlice.actions;

export default richTextSlice.reducer;
