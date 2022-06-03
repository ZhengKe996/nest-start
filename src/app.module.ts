import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { LoggerMiddleware } from './logger.middleware';
import { UserController } from './user/user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'test',
      models: [User],
    }),
    UsersModule,
    ProductsModule,
  ],
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
