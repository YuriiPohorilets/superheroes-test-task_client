import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api/";

export const getHeroes = async (page) => {
  try {
    const { data } = await axios.get(`/heroes?page=${page}`);

    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getHeroeDetails = async (heroId) => {
  try {
    const { data } = await axios.get(`/heroes/${heroId}`);

    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const createHero = async (hero) => {
  try {
    const { data } = await axios.post("/heroes", hero, {
      headers: {
        "Content-Type": "application/json,multipart/form-data",
      },
    });

    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const deleteHero = async (heroId) => {
  try {
    const { data } = await axios.delete(`/heroes/${heroId}`);

    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
