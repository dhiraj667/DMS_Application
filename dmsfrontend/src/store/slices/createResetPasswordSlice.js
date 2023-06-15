import axios from "axios";

const apiEndPoint = process.env.REACT_APP_API_URL + "forget-password";

export const createResetPassword = (set) => ({
  resetPassword: async function (data) {
    const response = await axios.post(apiEndPoint, data);
    return response;
  },
});
