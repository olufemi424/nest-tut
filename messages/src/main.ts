import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  // add validation to request body
  // only expected data will be validated
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(7777);
}
bootstrap();
