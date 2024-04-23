import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const option = new DocumentBuilder()
  .setTitle('Your API Title')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('your-tag')
    .build();
    const document =SwaggerModule.createDocument(app, option);
    SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
