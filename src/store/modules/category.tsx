import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../store/store";

interface CategoryState {
  selectedId: number;
}

const initialState: CategoryState = {
  selectedId: 0,
};

export const categoryModule = createSlice({
  name: "category",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<number>) => {
      state.selectedId = action.payload;
    },
  },
});

export const { setActiveCategory } = categoryModule.actions;

export const setSelectedCatId = (amount: number): AppThunk => (dispatch) => {
  dispatch(setActiveCategory(amount));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectedCatId = (state: RootState) => state.category.selectedId;

export default categoryModule.reducer;
