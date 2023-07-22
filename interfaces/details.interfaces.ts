export interface IDetails{
    adult: boolean ,
    backdrop_path: string,
    created_by: ICreateBy[],
    episode_run_time: [],
    first_air_date: string,
    genres: IGenres[],
    homepage: string,
    id: number,
    in_production: boolean,
    languages: string[],
    last_air_date: string,
    last_episode_to_air: ILastEpisodeToAir,
    name: string,
    next_episode_to_air: string,
    networks: INetworks[],
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: [],
    production_countries: IProductionCountries[],
    seasons: ISession[],
    spoken_languages: ISpokenLanguages[],
    status: string,
    tagline: string,
    type: string,
    vote_average: number,
    vote_count: number
}

interface  ISpokenLanguages{
    english_name: string,
    iso_639_1: string,
    name: string
}

interface ISession {
    air_date: string,
    episode_count: number,
    id: number,
    name: string,
    overview: string,
    poster_path: string,
    vote_average: number
}

interface IProductionCountries {
    iso_3166_1: string,
    name: string
}

interface INetworks  {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string 
}

interface ILastEpisodeToAir {
    id: number,
    name: string ,
    overview: string,
    vote_average: number,
    vote_count: number,
    air_date: string,
    episode_number: number,
    production_code: string,
    runtime: number,
    season_number: number,
    show_id: number,
    still_path: string
}

interface IGenres  {
    id: number,
    name: string
}

interface ICreateBy {
    id:number,
    credit_id: string,
    name: string,
    gender: number,
    profile_path: string 
}