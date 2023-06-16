import axios from "axios";

const apiEndPoint = process.env.REACT_APP_API_URL + "doctypefields";

export const createDocTypeFieldSlice = (set) => ({
  docTypeFields: [],
  docTypeAndDept: [],
  getDocTypeFields: async function () {
    const response = await axios.get(apiEndPoint);
    set(() => ({ docTypeFields: response.data.data }));
  },
  getByDocTypeAndDept: async function (data) {
    const response = await axios.get(apiEndPoint, { params: data });
    set(() => ({ docTypeAndDept: response.data.data }));
    return response;
  },
  saveDocTypeField: async function (data) {
    const response = await axios.post(apiEndPoint, data);
    set((state) => ({
      docTypeFields: [response.data, ...state.docTypeFields],
    }));
  },
  deleteDocTypeField: async function (id) {
    const response = await axios.delete(`${apiEndPoint}/${id}`);
    set((state) => ({
      docTypeFields: state.docTypeFields.filter(
        (d) => d._id !== response.data._id
      ),
    }));
  },
  updateDocTypeField: async function (data) {
    // console.log(data);
    const response = await axios.patch(`${apiEndPoint}/${data._id}`, data);
    set((state) => {
      const index = state.docTypeFields.findIndex((d) => d._id === data._id);
      console.log(index);
      let newDocTypeField = [...state.docTypeFields];
      newDocTypeField[index] = response.data;
      console.log(newDocTypeField);
      return { docTypeFields: newDocTypeField };
    });
  },
});
