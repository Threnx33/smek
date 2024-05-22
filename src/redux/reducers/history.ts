import { IElement } from "@/pages/designer/designerElements/sections/stage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DeleteType = { actionType: "delete"; value: string };
type AddType = { actionType: "add"; value: IElement };
type UpdateType = { actionType: "update"; value: IElement };

type UndoRedoType = DeleteType | AddType | UpdateType;

type UndoRedoItem = {
  undo: UndoRedoType;
  redo: UndoRedoType;
};

interface HistoryState {
  past: UndoRedoItem[];
  future: UndoRedoItem[];
  actionToDo: UndoRedoType | null;
}

const initialState: HistoryState = {
  past: [],
  future: [],
  actionToDo: null,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    pushAction(state, action: PayloadAction<UndoRedoItem>) {
      state.past.push(action.payload);
      state.future = [];
    },
    undo(state) {
      const action = state.past.pop();
      if (action) {
        state.actionToDo = action.undo;
        state.future.push(action);
      }
    },
    redo(state) {
      const action = state.future.pop();
      if (action) {
        state.actionToDo = action.redo;
        state.past.push(action);
      }
    },
    setActionToDo(state, action: PayloadAction<UndoRedoType | null>) {
      state.actionToDo = action.payload;
    },
    clearHistoryState() {
      return initialState;
    },
  },
});

export const { pushAction, undo, redo, setActionToDo, clearHistoryState } =
  historySlice.actions;
export default historySlice.reducer;
