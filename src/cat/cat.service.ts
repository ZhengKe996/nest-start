import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  say(): { name: string } {
    return {
      name: 'hello',
    };
  }

  sayHello(): number[] {
    return [1, 2, 3, 4, 5];
  }
}
