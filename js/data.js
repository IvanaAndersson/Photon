const apikey = "563492ad6f917000010000018d4d5a67577e4c59a84c7de1b246edb1";
const baseUrl = "https://api.pexels.com/v1";

const createURL = (endpoint, queryText, picsPerPage, pageNumber) => {
  if (endpoint === "search") {
    return `${baseUrl}/${endpoint}?query=${queryText}&per_page=${picsPerPage}&page=${pageNumber}`;
  } else if (endpoint === "curated") {
    return `${baseUrl}/${endpoint}?per_page=${picsPerPage}&page=${pageNumber}`;
  }
};

const fetchPictures = async (endpoint, queryText, picsPerPage, pageNumber) => {
  const dataFetch = await fetch(
    createURL(endpoint, queryText, picsPerPage, pageNumber),
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: apikey,
      },
    }
  );

  const data = await dataFetch.json();

  return data;
};

export default fetchPictures;
