import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/';

export const getHeroes = async page => {
  try {
    const { data } = await axios.get(`/heroes?page=${page}`);

    return data;
  } catch (error) {
    console.log(error.message);
    return {
      data: null,
      error: error.response.data,
    };
  }
};

export const getHeroeDetails = async heroId => {
  try {
    const { data } = await axios.get(`/heroes/${heroId}`);

    return data;
  } catch (error) {
    console.log(error.message);
    return {
      data: null,
      error: error.response.data,
    };
  }
};

export const createHero = async hero => {
  try {
    const { data } = await axios.post('/heroes', hero, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  } catch (error) {
    console.log(error.message);
    return {
      data: null,
      error: error.response.data,
    };
  }
};

export const deleteHero = async heroId => {
  try {
    const { data } = await axios.delete(`/heroes/${heroId}`);

    return data;
  } catch (error) {
    console.log(error.message);
    return {
      data: null,
      error: error.response.data,
    };
  }
};

export const updateHero = async (heroId, hero) => {
  try {
    const { data } = await axios.patch(`/heroes/${heroId}`, hero, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  } catch (error) {
    console.log(error.message);
    return {
      data: null,
      error: error.response.data,
    };
  }
};
