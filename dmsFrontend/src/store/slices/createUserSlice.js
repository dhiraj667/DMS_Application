import axios from "axios";

const apiEndPoint = process.env.REACT_APP_API_URL + "users";

export const createUserSlice = (set) => ({
  users: [],
  userEmail: {},
  currentUser: {},
  getUsers: async function () {
    const response = await axios.get(apiEndPoint);
    console.log("api hitt");
    console.log(response.data.data);
    set((state) => ({ users: response.data.data }));
    // set(()=>({users:response.data.data})
  },
  saveUser: async function (data) {
    const response = await axios.post(apiEndPoint, data);
    set((state) => ({ users: [response.data, ...state.users] }));
    return response;
  },
  deleteUser: async function (data) {
    console.log(data);
    data["isActive"] = false;
    console.log(data);
    const response = await axios.patch(`${apiEndPoint}/${data._id}`, data);
    set((state) => {
      const index = state.users.findIndex((u) => u._id === data._id);
      console.log(index);
      let newUsers = [...state.users];
      newUsers[index] = response.data;
      console.log(newUsers);
      return { users: newUsers };
    });
  },
  updateUser: async function (data) {
    console.log(data);
    data = { ...data, updateAt: new Date().toString(), updatedBy: data._id };
    const response = await axios.patch(`${apiEndPoint}/${data._id}`, data);
    set((state) => {
      const index = state.users.findIndex((u) => u._id === data._id);
      console.log(index);
      let newUsers = [...state.users];
      newUsers[index] = response.data;
      console.log(newUsers);
      return { users: newUsers };
    });
  },
  findByEmailId: async function (email) {
    console.log(email);
    const response = await axios.get(apiEndPoint, { params: email });
    console.log("hiii");
    console.log(response.data.data);
    set(() => ({ userEmail: response.data.data }));
    return response;
  },

  getByUserId: async function (_id) {
    console.log(_id);
    const response = await axios.get(apiEndPoint, { params: _id });
    console.log(response);
    set(() => ({ currentUser: response.data.data[0] }));
    return response;
  },

  updateProfile: async function (data) {
    data = { ...data, updateAt: new Date().toString(), updatedBy: data._id };
    const response = await axios.patch(`${apiEndPoint}/${data._id}`, data);
    set((state) => {
      const index = state.users.findIndex((u) => u._id === data._id);
      console.log(index);
      let newUsers = [...state.users];
      newUsers[index] = response.data;
      console.log(newUsers);
      return { currentUser: newUsers[index] };
    });
    return response;
  },
});
