import { create } from "zustand";
import { createDepartmentSlice } from "./slices/createDepartmentSlice";
import { createDocTypeFieldSlice } from "./slices/createDocTypeFieldSlice";
import { createDocTypeSlice } from "./slices/createDocumentTypeSlice";
export const useBoundStore = create((...a) => ({
  ...createDepartmentSlice(...a),
  ...createDocTypeFieldSlice(...a),
  ...createDocTypeSlice(...a),
}));
