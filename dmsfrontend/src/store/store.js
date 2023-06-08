import { create } from "zustand";
import { createDepartmentSlice } from "./slices/createDepartmentSlice";
export const useBoundStore = create((...a) => ({
  ...createDepartmentSlice(...a),
}));
