import { baseApi } from "./base";
import { IDetails  } from '../interfaces/details.interfaces';

export const getDetails = (id:  string ): Promise<IDetails> =>
  baseApi.get(`/tv/${id}?api_key=7d7a84a1862c799d56405fb78c843d7&language=en-US`).then((r) => r.data);