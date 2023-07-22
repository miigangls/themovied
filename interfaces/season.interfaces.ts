import { IEpisodes } from './episode.interfaces';

export interface ISeason {
    _id: string,
    air_date: string,
    episodes: IEpisodes[],
    name: string,
    overview: string,
    id: number,
    poster_path: string,
    season_number: number,
    vote_average: number
}


