import axios from "axios";

const apiEndPoint = process.env.REACT_APP_API_URL + "departments";

export const createDepartmentSlice = (set) => ({
  departments: [],
  getDepartments: async function () {
    const response = await axios.get(apiEndPoint);
    console.log(response.data.total);
    console.log(response.data.data);
    set(() => ({ departments: response.data.data }));
  },
  saveDepartment: async function (data) {
    const response = await axios.post(apiEndPoint, data);
    set((state) => ({
      departments: [response.data, ...state.departments],
    }));
  },
  deleteDepartment: async function (id) {
    const response = await axios.delete(`${apiEndPoint}/${id}`);
    set((state) => ({
      departments: state.departments.filter(
        (dept) => dept._id !== response.data._id
      ), 
    }));
  },
  updateDepartment: async function (data) {
    // console.log(data);
    const response = await axios.patch(`${apiEndPoint}/${data._id}`, data);
    set((state) => {
      const index = state.departments.findIndex((d) => d._id === data._id);
      console.log(index);
      let newDepartments = [...state.departments];
      newDepartments[index] = response.data;
      console.log(newDepartments);
      return { departments: newDepartments };
    });
  },
});
