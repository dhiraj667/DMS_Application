import axios from "axios";

const apiEndPoint = process.env.REACT_APP_API_URL + "fields";

export const createFieldSlice = (set) => ({
  currentField: {},
  fields: [],

  getFields: async function () {
    const response = await axios.get(apiEndPoint);
    set(() => ({ fields: response.data.data }));
  },

  getByFieldId: async function (id) {
    const response = await axios.get(`${apiEndPoint}/${id}`);
    // console.log(response.data);
    set((state) => ({
      currentField: response.data,
    }));
  },
  saveField: async function (data) {
    const response = await axios.post(apiEndPoint, data);
    set((state) => ({
      fields: [response.data, ...state.fields],
    }));
  },
  deleteField: async function (id) {
    const response = await axios.delete(`${apiEndPoint}/${id}`);
    set((state) => ({
      fields: state.fields.filter((f) => f._id !== response.data._id),
    }));
  },
  updateField: async function (data) {
    console.log(data);
    const response = await axios.patch(`${apiEndPoint}/${data._id}`, data);
    set((state) => {
      const index = state.fields.findIndex((f) => f._id === data._id);
      console.log(index);
      let newField = [...state.fields];
      newField[index] = response.data;
      console.log(newField);
      return { fields: newField };
    });
  },
});
