"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const cheerio_1 = require("cheerio");
const scraper = require("cloudscraper");
let AppService = class AppService {
    constructor() {
        this.url = 'https://www.animefenix.com';
        this.home_url = {
            method: 'GET',
            url: this.url,
        };
    }
    getHome() {
        return {
            message: 'API Working!',
            author: 'Carlos Burelo',
            repository: 'https://github.com/carlos-burelo/animefenix-api',
            endpoints: {
                episodes: '/episodes',
                recents: '/recents',
                search: '/search?q=:name',
                getAnime: '/anime/:id',
                getAnimes: '/animes?p=#',
                getEpisode: '/ver/:id',
            },
            success: true,
        };
    }
    async getPopulars() {
        try {
            const populars = [];
            const response = await scraper(this.home_url);
            const $ = cheerio_1.default.load(response);
            $('.owl-carousel.home-slider .serie-card').each((i, e) => {
                let popular;
                const el = $(e);
                const id = el
                    .find('.title h3 a')
                    .attr('href')
                    .replace(this.url + '/', '');
                const title = el.find('.title h3 a').text();
                const cover = el.find('figure a img').attr('src');
                const type = el.find('figure .type').text();
                const status = el.find('figure .airing').text();
                const date = parseInt(el.find('figure .year').text());
                popular = {
                    id,
                    title,
                    cover,
                    type,
                    status,
                    date,
                };
                populars.push(popular);
            });
            return populars;
        }
        catch (error) { }
    }
    async getRecents() {
        try {
            const recents = [];
            const response = await scraper(this.home_url);
            const $ = cheerio_1.default.load(response);
            $('.list-series .serie-card').each((i, e) => {
                let recent;
                const el = $(e);
                const id = el
                    .find('.title h3 a')
                    .attr('href')
                    .replace(this.url + '/', '');
                const title = el.find('.title h3 a').text();
                const cover = el.find('figure a img').attr('src');
                const type = el.find('figure .type').text();
                let status = el.find('figure .airing').text();
                status == '' ? (status = 'Finalizado') : status;
                const date = parseInt(el.find('figure .year').text());
                recent = {
                    id,
                    title,
                    cover,
                    type,
                    status,
                    date,
                };
                recents.push(recent);
            });
            return recents;
        }
        catch (error) { }
    }
    async getEpisodes() {
        try {
            const episodes = [];
            const response = await scraper(this.home_url);
            const $ = cheerio_1.default.load(response);
            $('.capitulos-grid .item').each((i, e) => {
                let episode;
                const el = $(e);
                const id = el
                    .find('.overarchingdiv a')
                    .attr('href')
                    .replace(`${this.url}/ver/`, '');
                const title = el.find('.overtitle').text();
                let number = el.find('.overepisode').text();
                number = parseInt(number.replace('EP', ''));
                const cover = el.find('.overarchingdiv a img').attr('src');
                episode = {
                    id,
                    title,
                    number,
                    cover,
                };
                episodes.push(episode);
            });
            return episodes;
        }
        catch (error) {
            return { error: 404, message: error };
        }
    }
    async getEmision(page) {
        try {
            !page ? (page = '1') : (page = page);
            this.home_url.url = `${this.url}/animes?estado[]=1&page=${page}`;
            const response = await scraper(this.home_url);
            const animes = [];
            const $ = cheerio_1.default.load(response);
            $('.list-series article').each((i, e) => {
                const el = $(e);
                const id = el
                    .find('.title h3 a')
                    .attr('href')
                    .replace(this.url + '/', '');
                const title = el.find('.title h3 a').text();
                const cover = el.find('figure a img').attr('src');
                const type = el.find('figure .type').text();
                let status = el.find('figure .airing').text();
                const sinopsis = el
                    .find('.serie-card__information')
                    .text()
                    .trim();
                status == '' ? (status = 'Finalizado') : status;
                const date = parseInt(el.find('figure .year').text());
                const anime = {
                    id,
                    title,
                    sinopsis,
                    cover,
                    type,
                    status,
                    date,
                };
                animes.push(anime);
            });
            const temp = [];
            $('.pagination-list li').each((i, e) => {
                const el = $(e);
                const id = el.find('a').text();
                temp.push(id);
            });
            const pages = parseInt(temp[temp.length - 2]);
            return { animes, pages };
        }
        catch (error) {
            return { error: 404, message: error };
        }
    }
    async searchAnime(anime) {
        try {
            this.home_url.url = `${this.url}/animes?q=${anime}`;
            const response = await scraper(this.home_url);
            const animes = [];
            const $ = cheerio_1.default.load(response);
            $('.list-series article').each((i, e) => {
                const el = $(e);
                const id = el
                    .find('.title h3 a')
                    .attr('href')
                    .replace(this.url + '/', '');
                const title = el.find('.title h3 a').text();
                const cover = el.find('figure a img').attr('src');
                const type = el.find('figure .type').text();
                let status = el.find('figure .airing').text();
                const sinopsis = el
                    .find('.serie-card__information')
                    .text()
                    .trim();
                status == '' ? (status = 'Finalizado') : status;
                const date = parseInt(el.find('figure .year').text());
                const anime = {
                    id,
                    title,
                    sinopsis,
                    cover,
                    type,
                    status,
                    date,
                };
                animes.push(anime);
            });
            if (animes.length == 0) {
                return {
                    results: 0,
                };
            }
            else {
                return animes;
            }
        }
        catch (error) {
            return { error: 404, message: error };
        }
    }
    async getAnimes(page) {
        try {
            !page ? (page = '1') : page;
            this.home_url.url = `${this.url}/animes?page=${page}`;
            const response = await scraper(this.home_url);
            const animes = [];
            const $ = cheerio_1.default.load(response);
            $('.list-series article').each((i, e) => {
                const el = $(e);
                const id = el
                    .find('.title h3 a')
                    .attr('href')
                    .replace(this.url + '/', '');
                const title = el.find('.title h3 a').text();
                const cover = el.find('figure a img').attr('src');
                const type = el.find('figure .type').text();
                let status = el.find('figure .airing').text();
                const sinopsis = el
                    .find('.serie-card__information')
                    .text()
                    .trim();
                status == '' ? (status = 'Finalizado') : status;
                const date = parseInt(el.find('figure .year').text());
                const anime = {
                    id,
                    title,
                    sinopsis,
                    cover,
                    type,
                    status,
                    date,
                };
                animes.push(anime);
            });
            const temp = [];
            $('.pagination-list li').each((i, e) => {
                const el = $(e);
                const id = el.find('a').text();
                temp.push(id);
            });
            const pages = parseInt(temp[temp.length - 2]);
            return { animes, pages };
        }
        catch (error) {
            return { error: 404, message: error };
        }
    }
    async getAnime(animeid) {
        try {
            this.home_url.url = `${this.url}/${animeid}`;
            const response = await scraper(this.home_url);
            const $ = cheerio_1.default.load(response);
            let anime;
            const episodes = [];
            const genders = [];
            $('.hero section:nth-child(3) .container .columns .column .anime-page__episode-list li').each((i, e) => {
                const el = $(e);
                const id = el
                    .find('a')
                    .attr('href')
                    .replace(this.url + '/ver/', '');
                let number = el
                    .find('a span')
                    .text()
                    .replace('Episodio ', '');
                number = parseInt(number);
                const episode = {
                    id,
                    number,
                };
                episodes.push(episode);
            });
            $('.hero .has-background-darkX .container .columns.is-mobile.is-multiline .column p.genres a').each((i, e) => {
                const el = $(e);
                const id = el
                    .attr('href')
                    .replace(this.url + '/animes?genero[]=', '');
                const title = el.text();
                const gender = {
                    id,
                    title,
                };
                genders.push(gender);
            });
            $('.hero .has-background-darkX .container .columns.is-mobile.is-multiline').each((i, e) => {
                const el = $(e);
                const title = el.find('.title.has-text-orange').text();
                const cover = el.find('figure.image img').attr('src');
                const sinopsis = el.find('.has-text-light.sinopsis').text();
                const type = el
                    .find('ul.has-text-light li:nth-child(1)')
                    .text()
                    .replace('Tipo: ', '');
                const status = el
                    .find('ul.has-text-light li:nth-child(2)')
                    .text()
                    .replace('Estado: ', '');
                let no_episodes = el
                    .find('ul.has-text-light li:nth-child(3)')
                    .text()
                    .replace('Episodios: ', '');
                no_episodes = parseInt(no_episodes);
                let views = el
                    .find('ul.has-text-light li:nth-child(4)')
                    .text()
                    .replace('Visitas: ', '');
                views = parseInt(views);
                let prequel = undefined;
                let sequel = undefined;
                let next_episode = undefined;
                const check = el.find('ul.has-text-light li:nth-child(5)').text();
                if (check !== '') {
                    if (check.includes('Precuela:')) {
                        const prequel_name = el
                            .find('ul.has-text-light li:nth-child(5) a')
                            .text();
                        const prequel_id = el
                            .find('ul.has-text-light li:nth-child(5) a')
                            .attr('href')
                            .replace(this.url + '/', '');
                        prequel = {
                            prequel_name,
                            prequel_id,
                        };
                    }
                    if (check.includes('Secuela:')) {
                        const sequel_name = el
                            .find('ul.has-text-light li:nth-child(5) a')
                            .text();
                        const sequel_id = el
                            .find('ul.has-text-light li:nth-child(5) a')
                            .attr('href')
                            .replace(this.url + '/', '');
                        sequel = {
                            sequel_name,
                            sequel_id,
                        };
                    }
                }
                if (el
                    .find('ul.has-text-light li:last-child')
                    .text()
                    .includes('episodio') == true) {
                    next_episode = el
                        .find('ul.has-text-light li:last-child')
                        .text()
                        .replace('Próximo episodio: ', '');
                }
                anime = {
                    id: animeid,
                    title,
                    cover,
                    sinopsis,
                    type,
                    status,
                    no_episodes,
                    views,
                    sequel,
                    prequel,
                    next_episode,
                    genders,
                    episodes,
                };
            });
            return anime;
        }
        catch (error) {
            return { error: 404, message: error };
        }
    }
    async getEpisode(episode) {
        try {
            this.home_url.url = `${this.url}/ver/${episode}`;
            const response = await scraper(this.home_url);
            const $ = cheerio_1.default.load(response);
            let Episode;
            const ctrls = [];
            var server_list = [];
            $('.hero section:nth-child(2) .container .columns.is-multiline .column.is-12-mobile.is-4-tablet.is-3-desktop .columns div').each((i, e) => {
                const el = $(e);
                const ctrl = el
                    .find('a')
                    .attr('href')
                    .replace(this.url + '/ver/', '')
                    .replace(this.url + '/', '')
                    .split('-');
                const arr = [ctrl.length - 1];
                ctrls.push(arr[0]);
            });
            let prev = false;
            let next = false;
            if (ctrls.length == 3) {
                prev = true;
                next = true;
            }
            else {
                if (ctrls[0] < ctrls[1]) {
                    next = true;
                }
                else {
                    prev = true;
                }
            }
            $('.hero section:nth-child(2)').each((i, e) => {
                const el = $(e);
                const title = el.find('h1.title').text().trim();
                let no_ep = episode.split('-');
                no_ep = parseInt(no_ep[no_ep.length - 1]);
                const anime_id = episode.replace(`-${no_ep}`, '');
                Episode = {
                    anime_id,
                    title,
                    no_ep,
                    ctrls: {
                        prev,
                        next,
                    },
                    servers: server_list,
                };
            });
            $('.player-container').each((i, e) => {
                const el = $(e);
                const servers = el.find('script').html();
                $(this.rplc(servers)).each((i, e) => {
                    const el = $(e);
                    let f = el.attr('src');
                    if (f !== undefined) {
                        if (f.includes('http') == false) {
                            f = 'https://' + f;
                        }
                        f = f.replace('https://../', 'https://');
                        f = f.replace('https:////', 'https://');
                        f = f.replace('https:///', 'https://');
                        f = f.replace('"', '');
                        const videolinks = new URL(f);
                        const { host } = videolinks;
                        let name = host
                            .replace('.com', '')
                            .replace('www.', '')
                            .replace('.ru', '')
                            .replace('repro.', '')
                            .replace('.co', '')
                            .replace('.nz', '');
                        name = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
                        const server = {
                            url: f,
                            name,
                        };
                        server_list.push(server);
                    }
                });
            });
            var serv_name = ["mega", "yourupload", "burstcloud", "videobin", "fembed", "mp4upload", "sendvid"];
            var s_temp = [];
            for (const ser of server_list) {
                var response2 = await scraper(ser.url);
                let cont = cheerio_1.default.load(response2);
                let dat = cont('script').get()[0].children[0].data;
                dat = dat.replace(/";/g, '');
                dat = dat.replace(/\n/g, '');
                dat = dat.replace(/  /g, '');
                var myRegex = /<iframe[^>]+src="(https:\/\/[^">]+)"/g;
                var src = myRegex.exec(dat);
                if (src != null) {
                    let url = src[1].replace(/ /g, '');
                    var name = "Otro";
                    for (const s_n of serv_name) {
                        let posicion = url.indexOf(s_n);
                        if (posicion !== -1) {
                            name = s_n;
                            break;
                        }
                    }
                    s_temp.push({ name: name, url: url });
                }
            }
            server_list = [];
            server_list = s_temp;
            Episode.servers = server_list;
            return Episode;
        }
        catch (error) {
            return { error: 404, message: error };
        }
    }
    rplc(text) {
        text = text.replace('var tabsArray = new Object();', '');
        for (let i = 0; i <= 15; i++) {
            text = text.replace(`tabsArray['${i}'] = "`, '');
        }
        text = text.replace(/";/g, '');
        text = text.replace(/\n/g, '');
        text = text.replace(/  /g, '');
        text = text.replace('</iframe>', '</iframe>\n');
        text = text.replace('console.log("primer elemento ----------- >" + tabsArray[1]);', '');
        return text;
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map