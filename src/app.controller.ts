import { Controller, Get, Header, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('')
  home(): any {
    return this.appService.getHome();
  }
  @Get('episodes')
  getEpisodes(): any {
    return this.appService.getEpisodes();
  }
  @Get('populars')
  getPopulars(): any {
    return this.appService.getPopulars();
  }

  @Get('recents')
  getRecents(): any {
    return this.appService.getRecents();
  }

  @Get('emision')
  getEmision(@Query('p') page: string) {
    return this.appService.getEmision(page);
  }
  @Get('animes')
  getAnimes(@Query('p') page: string) {
    return this.appService.getAnimes(page);
  }
  @Get('anime/:id')
  getAnime(@Param() params) {
    return this.appService.getAnime(params.id);
  }
  @Get('ver/:id')
  getEpisode(@Param() params) {
    return this.appService.getEpisode(params.id);
  }
  @Get('search')
  searchAnime(@Query('q') anime: string) {
    return this.appService.searchAnime(anime);
  }
}
