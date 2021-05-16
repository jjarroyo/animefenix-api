import { Controller, Get, Header, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Cache-Control', 'none')
  getLastest(): any {
    return this.appService.getLastest();
  }
  @Get('emision')
  @Header('Cache-Control', 'none')
  getEmision(@Query('p') page: string) {
    return this.appService.getEmision(page);
  }
  @Get('animes')
  @Header('Cache-Control', 'none')
  getAnimes(@Query('p') page: string) {
    return this.appService.getAnimes(page);
  }
  @Get('anime/:id')
  @Header('Cache-Control', 'none')
  getAnime(@Param() params) {
    return this.appService.getAnime(params.id);
  }
  @Get('ver/:id')
  @Header('Cache-Control', 'none')
  getEpisode(@Param() params) {
    return this.appService.getEpisode(params.id);
  }
  @Get('search')
  @Header('Cache-Control', 'none')
  searchAnime(@Query('q') anime: string) {
    return this.appService.searchAnime(anime);
  }
}
