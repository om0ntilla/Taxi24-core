import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        stopAtFirstError: true,
      }),
  );

  const options = new DocumentBuilder()
    .setTitle('Taxi24 API')
    .setDescription('Documentación de API Taxi24')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);
  app.enableCors(); // Problem flutter web. Consulted (07-2021) in: https://docs.nestjs.com/security/cors

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
