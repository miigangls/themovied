import { baseApi } from "./base";
import {  IEpisodes } from '../interfaces/episode.interfaces';

export const getSeasons = (idEpisode: number, numberSession: number, numberEpisode: number): Promise<IEpisodes[]> =>
baseApi.get(`/tv/${idEpisode}/season/${numberSession}/episode/${numberEpisode}?api_key=7d7a84a1862c799d56405fb78c843d7&language=en-US`).then((r) => r.data);