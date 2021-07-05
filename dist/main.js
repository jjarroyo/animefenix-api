"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const morgan = require("morgan");
const app_module_1 = require("./app.module");
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(morgan('dev'));
    app.disable('x-powered-by');
    app.disable('etag');
    await app.listen(port, host);
}
bootstrap();
//# sourceMappingURL=main.js.map