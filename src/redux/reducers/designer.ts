import { IElement } from "@/pages/designer/designerElements/sections/stage";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface CanvasToAddType {
  isText: boolean | null;
  fontSize: string | null;
  imageUrl: string | null;
}

export interface DesignerProps {
  elements: IElement[];
  selectedElement: IElement | null;
  editingElement: IElement | null;
  canvasToAdd: CanvasToAddType;
  printCanvas: boolean;
}

const initialState: DesignerProps = {
  elements: [],
  selectedElement: null,
  editingElement: null,
  canvasToAdd: {
    isText: null,
    fontSize: null,
    imageUrl: null,
  },
  printCanvas: false,
};

export const designerSlice = createSlice({
  name: "designer",
  initialState,
  reducers: {
    setElements: (state, action: PayloadAction<IElement[]>) => {
      state.elements = action.payload;
    },
    setSelectedElement: (state, action: PayloadAction<IElement | null>) => {
      state.selectedElement = action.payload;
    },
    setEditingElement: (state, action: PayloadAction<IElement | null>) => {
      state.editingElement = action.payload;
    },
    setCanvasToAdd: (state, action: PayloadAction<CanvasToAddType>) => {
      state.canvasToAdd = action.payload;
    },
    resetCanvasToAdd: (state) => {
      state.canvasToAdd = { isText: null, fontSize: null, imageUrl: null };
    },
    setPrintCanvas: (state, action: PayloadAction<boolean>) => {
      state.printCanvas = action.payload;
    },
  },
});

export const {
  setElements,
  setSelectedElement,
  setEditingElement,
  setCanvasToAdd,
  resetCanvasToAdd,
  setPrintCanvas,
} = designerSlice.actions;

export default designerSlice.reducer;
