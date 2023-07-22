import { baseApi } from "./base";
import {  IRated } from '../interfaces/rated.interfaces';

export const getTopRated = (): Promise<IRated[]> =>
  baseApi.get(`/tv/top_rated?api_key=7d7a84a1862c799d56405fb78c843d79&language=en-US&page=1`).then((r) => r.data);