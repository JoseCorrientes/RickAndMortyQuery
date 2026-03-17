import Axios from "axios";

const url = import.meta.env.VITE_BACKEND_CHARACTERS_URL;

const charactersApi = Axios.create({
  baseURL: url,
});

export { charactersApi };
