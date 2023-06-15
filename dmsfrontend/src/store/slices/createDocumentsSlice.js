import axios from "axios";

const apiEndPoint = process.env.REACT_APP_API_URL + "documents";

export const createDocumentsSlice = (set) => ({
  documents: [],

  saveDocument: async function (data) {
    console.log(data);
    const response = await axios.post(apiEndPoint, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(response.data);
    set({
      documents: response.data,
    });
  },
});
