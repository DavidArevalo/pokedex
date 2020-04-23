import { API_BASE } from "./constants";
import { normalizeUrl } from "./utils/normalize";
import axios from "axios";

export default {
  types: {
    getTypes: async ({ page = 0 } = {}) => {
      const endpoint = normalizeUrl(API_BASE, "type");
      try {
        const res = await axios.get(endpoint);
        return res;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  abilities: {},
  pokemons: {},
};
