import { create } from "zustand";
import { createDepartmentSlice } from "./slices/createDepartmentSlice";
import { createUserSlice } from "./slices/createUserSlice";
import { createDocTypeFieldSlice } from "./slices/createDocTypeFieldSlice";
import { createDocTypeSlice } from "./slices/createDocumentTypeSlice";
import { createFieldSlice } from "./slices/createFieldSlice";
export const useBoundStore = create((...a) => ({
  ...createDepartmentSlice(...a),
  ...createDocTypeFieldSlice(...a),
  ...createDocTypeSlice(...a),
  ...createFieldSlice(...a),
  ...createUserSlice(...a),
}));
