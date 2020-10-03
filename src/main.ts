import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Swagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Swagger.init(app);

  await app.listen(3000);
}
bootstrap();
