import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('中间件触发了');
    next();
  }
}

export function logger(req, res, next) {
  console.log(`Request... logger`);
  next();
}
