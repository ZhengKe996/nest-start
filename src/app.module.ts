import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { LoggerMiddleware } from './logger.middleware';
import { UserController } from './user/user.controller';
@Module({
  imports: [],
  controllers: [AppController, CatController, UserController],
  providers: [AppService, CatService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        // { path: 'cat/:id', method: RequestMethod.GET },
        { path: 'cat/(.*)', method: RequestMethod.POST },
      )
      .forRoutes(CatController);
  }
}
