import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Task } from "../types/types";

// stateの構造体の定義
export interface AppState {
  editedTask: Task
  csrfTokenExp: boolean
}

// stateの初期値
const initialState: AppState = {
  editedTask: {
    id: '',
    title: '',
    description: ''
  },
  csrfTokenExp: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // 入力されたタスク情報をstateに反映
    setEditedTask: (state, action: PayloadAction<Task>) => {
      state.editedTask = action.payload
    },

    // タスク情報のstateを初期化
    resetEditedTask: (state) => {
      state.editedTask = initialState.editedTask
    },

    // csrf-tokenが有効かどうかのstate情報を更新
    toggleCsrfState: (state) => {
      state.csrfTokenExp = !state.csrfTokenExp
    },
  },
})

export const { setEditedTask, resetEditedTask, toggleCsrfState } = appSlice.actions
export const selectTask = (state: RootState) => state.app.editedTask
export const selectCsrfState = (state: RootState) => state.app.csrfTokenExp
export default appSlice.reducer
