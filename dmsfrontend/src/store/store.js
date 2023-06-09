import { create } from "zustand";
import { createDepartmentSlice } from "./slices/createDepartmentSlice";
import { createUserSlice } from "./slices/createUserSlice";
export const useBoundStore = create((...a) => ({
  ...createDepartmentSlice(...a),
  ...createUserSlice(...a),
}));
