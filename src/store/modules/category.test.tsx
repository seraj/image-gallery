import { store } from "../store";
import { setSelectedCatId } from "./category";

test("setSelectedCatId test", () => {
  let state = store.getState();
  const selectedId = state.category.selectedId;
  expect(selectedId).toBe(0);

  store.dispatch(setSelectedCatId(Number(10)));
  state = store.getState();
  let changedSelectedId = state.category.selectedId;
  expect(changedSelectedId).toBe(10);
});
