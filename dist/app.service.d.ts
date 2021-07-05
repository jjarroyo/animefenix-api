export interface HomeResponseI {
    populars: PopularI[];
    episodes: EpisodesI[];
    recents: RecentI[];
}
export interface PopularI {
    id: string;
    title: string;
    cover: string;
    type: string;
    status: string;
    date: number;
}
export interface EpisodesI {
    id: string;
    title: string;
    number: number;
    cover: string;
}
export interface RecentI {
    id: string;
    title: string;
    cover: string;
    type: string;
    status: string;
    date: number;
}
export interface AnimeCardI {
    id: string;
    title: string;
    sinopsis: string;
    cover: string;
    type: string;
    status: string;
    date: number;
}
export interface AnimeInfoI {
    id: string;
    title: string;
    cover: string;
    sinopsis: string;
    type: string;
    status: string;
    no_episodes: number | string;
    views: number;
    sequel?: any;
    prequel?: any;
    next_episode?: string;
    genders: GenderI[];
    episodes: EpisodeI[];
}
export interface GenderI {
    title: string;
    id: string;
}
export interface EpisodeI {
    id: string;
    number: number;
}
export declare class AppService {
    url: string;
    home_url: {
        method: string;
        url: string;
    };
    getHome(): {
        message: string;
        author: string;
        repository: string;
        endpoints: {
            episodes: string;
            recents: string;
            search: string;
            getAnime: string;
            getAnimes: string;
            getEpisode: string;
        };
        success: boolean;
    };
    getPopulars(): Promise<PopularI[]>;
    getRecents(): Promise<RecentI[]>;
    getEpisodes(): Promise<EpisodesI[] | {
        error: number;
        message: any;
    }>;
    getEmision(page: string): Promise<{
        animes: AnimeCardI[];
        pages: number;
        error?: undefined;
        message?: undefined;
    } | {
        error: number;
        message: any;
        animes?: undefined;
        pages?: undefined;
    }>;
    searchAnime(anime: string): Promise<AnimeCardI[] | {
        results: number;
        error?: undefined;
        message?: undefined;
    } | {
        error: number;
        message: any;
        results?: undefined;
    }>;
    getAnimes(page: string): Promise<{
        animes: AnimeCardI[];
        pages: number;
        error?: undefined;
        message?: undefined;
    } | {
        error: number;
        message: any;
        animes?: undefined;
        pages?: undefined;
    }>;
    getAnime(animeid: string): Promise<AnimeInfoI | {
        error: number;
        message: any;
    }>;
    getEpisode(episode: any): Promise<any>;
    rplc(text: any): string;
}
