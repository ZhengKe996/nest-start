import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './http-exception.filter';
import { MyLoggingInterceptor } from './my-logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(logger);
  app.useGlobalFilters(new HttpExceptionFilter());
  const config = new DocumentBuilder()
    .setTitle('我是标题')
    .setDescription('我是描述')
    .setVersion('1.0 我是版本号')
    .addTag('我是Tag')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // app.useGlobalInterceptors(new MyLoggingInterceptor());

  await app.listen(3000);
}
bootstrap();
