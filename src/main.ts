import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.SERVER_PORT, 10) || 4000;
  console.log(port);
  await app.listen(port);
}
bootstrap();
