import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
import * as morgan from 'morgan';
import { AppModule } from './app.module';

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(morgan('dev'));
  app.disable('x-powered-by');
  app.disable('etag');
  await app.listen(port, host);
}
bootstrap();
