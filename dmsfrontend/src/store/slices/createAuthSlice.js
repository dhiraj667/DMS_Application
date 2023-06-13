import axios from "axios";

const apiEndPoint = process.env.REACT_APP_API_URL + "authentication";

export const createAuthSlice = (set) => ({
  token: "",
  user: {},

  loginUser: async function (data) {
    data = { ...data, strategy: "local" };
    console.log(data);
    const response = await axios.post(apiEndPoint, data);
    sessionStorage.setItem("loginData", JSON.stringify(response.data));
    console.log(response);
    set(() => ({
      token: response.data.accessToken,
      user: response.data.user,
    }));
    return response;
  },
});
