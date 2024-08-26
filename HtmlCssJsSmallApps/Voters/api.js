export const fetchAPI = async (url) => {
  try {
    return await fetch(url).then((response) => response.json());
  } catch (err) {
    throw new Error(err);
  }
};
