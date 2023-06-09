import axios from "axios";

const apiEndPoint = process.env.REACT_APP_API_URL + "doctypes";

export const createDocTypeSlice = (set) => ({
  currentDocType: {},
  docTypes: [],

  getDocTypes: async function () {
    const response = await axios.get(apiEndPoint);
    set(() => ({ docTypes: response.data.data }));
  },

  getByDocTypeId: async function (id) {
    const response = await axios.get(`${apiEndPoint}/${id}`);
    // console.log(response.data);
    set((state) => ({
      currentDocType: response.data,
    }));
  },
  saveDocType: async function (data) {
    const response = await axios.post(apiEndPoint, data);
    set((state) => ({
      docTypes: [response.data, ...state.docTypes],
    }));
  },
  deleteDocType: async function (id) {
    const response = await axios.delete(`${apiEndPoint}/${id}`);
    set((state) => ({
      docTypes: state.docTypes.filter((doc) => doc._id !== response.data._id),
    }));
  },
  updateDocType: async function (data) {
    console.log(data);
    const response = await axios.patch(`${apiEndPoint}/${data._id}`, data);
    set((state) => {
      const index = state.docTypes.findIndex((d) => d._id === data._id);
      console.log(index);
      let newDocTypes = [...state.docTypes];
      newDocTypes[index] = response.data;
      console.log(newDocTypes);
      return { docTypes: newDocTypes };
    });
  },
});
