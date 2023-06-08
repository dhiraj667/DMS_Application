import { create } from "zustand";
import { createDepartmentSlice } from "./slices/createDepartmentSlice";
import { createDocTypeFieldSlice } from "./slices/createDocTypeFieldSlice";
export const useBoundStore = create((...a) => ({
  ...createDepartmentSlice(...a),
  ...createDocTypeFieldSlice(...a),
}));
