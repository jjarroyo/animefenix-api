import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    home(): any;
    getEpisodes(): any;
    getPopulars(): any;
    getRecents(): any;
    getEmision(page: string): Promise<{
        animes: import("./app.service").AnimeCardI[];
        pages: number;
        error?: undefined;
        message?: undefined;
    } | {
        error: number;
        message: any;
        animes?: undefined;
        pages?: undefined;
    }>;
    getAnimes(page: string): Promise<{
        animes: import("./app.service").AnimeCardI[];
        pages: number;
        error?: undefined;
        message?: undefined;
    } | {
        error: number;
        message: any;
        animes?: undefined;
        pages?: undefined;
    }>;
    getAnime(params: any): Promise<import("./app.service").AnimeInfoI | {
        error: number;
        message: any;
    }>;
    getEpisode(params: any): Promise<any>;
    searchAnime(anime: string): Promise<import("./app.service").AnimeCardI[] | {
        results: number;
        error?: undefined;
        message?: undefined;
    } | {
        error: number;
        message: any;
        results?: undefined;
    }>;
}
