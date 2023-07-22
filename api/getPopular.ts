import { baseApi } from "./base";
import { IPopular  } from '../interfaces/popular.interface';

export const getPopular = (): Promise<IPopular[]> =>
  baseApi.get(`tv/popular?api_key=7d7a84a1862c799d56405fb78c843d79&language=en-US&page=1`).then((r) => r.data);