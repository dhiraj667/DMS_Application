import axios from "axios";

const apiEndPoint = process.env.REACT_APP_API_URL + "authentication";

export const createAuthSlice = (set) => ({
  token: "",
  user: {},

  loginUser: async function (data) {
    data = { ...data, strategy: "local" };
    const response = await axios.post(apiEndPoint, data);
    if (response.data.user.isActive) {
      sessionStorage.setItem("loginData", JSON.stringify(response.data));
      set(() => ({
        token: response.data.accessToken,
        user: response.data.user,
      }));
    }

    return response;
  },
});
