import axios from 'axios';

axios.defaults.baseURL = 'https://weak-cyan-cod-wear.cyclic.app/api';

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
        'Content-Type': 'application/json,multipart/form-data',
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

export const deleteImage = async (heroId, imageUrl) => {
  try {
    const { data } = await axios.patch(
      `/heroes/images/${heroId}`,
      { imageUrl },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error.message);
    return {
      data: null,
      error: error.response.data,
    };
  }
};
