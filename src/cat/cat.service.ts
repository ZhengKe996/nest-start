import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  say(): { name: string } {
    return {
      name: 'hello',
    };
  }

  sayHello(): number[] {
    return [1, 2, 3, 4, 5];
  }

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
