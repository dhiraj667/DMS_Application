import axios from "axios";

const apiEndPoint = process.env.REACT_APP_API_URL + "documents";

export const createDocumentsSlice = (set) => ({
  documents: [],

  getAllDocuments: async function () {
    const response = await axios.get(apiEndPoint);
    set({
      documents: response.data.data,
    });
    return response;
  },

  saveDocument: async function (data) {
    console.log(data);
    const response = await axios.post(apiEndPoint, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(response.data);
    set((state) => ({
      documents: [response.data, ...state.documents],
    }));
    return response;
  },

  deleteDocument: async function (id) {
    console.log(id);
    const response = await axios.delete(`${apiEndPoint}/${id}`);
    set((state) => ({
      documents: state.documents.filter((d) => d._id !== id),
    }));
    return response;
  },
});
