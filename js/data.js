const apikey = "563492ad6f917000010000018d4d5a67577e4c59a84c7de1b246edb1";
const baseUrl = "https://api.pexels.com/v1";

const createURL = (endpoint, queryText, picsPerPage) => {
  if (endpoint === "search") {
    return `${baseUrl}/${endpoint}?query=${queryText}&per_page=${picsPerPage}`;
  } else if (endpoint === "curated") {
    return `${baseUrl}/${endpoint}?per_page=${picsPerPage}`;
  }
};

const fetchPictures = async (endpoint, queryText, picsPerPage) => {
  const dataFetch = await fetch(createURL(endpoint, queryText, picsPerPage), {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: apikey,
    },
  });

  const data = await dataFetch.json();

  return data;
};

export default fetchPictures;
