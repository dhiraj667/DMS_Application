import axios from "axios";

const apiEndPoint = process.env.REACT_APP_API_URL + "users";

export const createUserSlice = (set) => ({
  users: [],
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
  },
  deleteUser: async function (id) {
    const response = await axios.delete(`${apiEndPoint}/${id}`);
    set((state) => ({
      users: state.users.filter((user) => user._id !== response.data._id),
    }));
  },
  updateUser: async function (data) {
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
});
