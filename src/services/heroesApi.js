import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api/";

export const getHeroes = async () => {
  try {
    const { data } = await axios.get("/heroes");

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
