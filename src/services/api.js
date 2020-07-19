import axios from "axios";

axios.defaults.baseURL = "https://uxcandy.com/~shapoval/test-task-backend/v2";

const postLogin = (username, password) => {
  const params = new URLSearchParams();
  params.append("username", username);
  params.append("password", password);

  return axios
    .post("/login/?developer=Name", params)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export default { postLogin };
