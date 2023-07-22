import { baseApi } from "./base";
import {  ISeason } from '../interfaces/season.interfaces';

export const getSeasons = (idEpisode: number, numberSession: number): Promise<ISeason[]> =>
baseApi.get(`/tv/${idEpisode}/season/${numberSession}?api_key=7d7a84a1862c799d56405fb78c843d7&language=en -US`).then((r) => r.data);