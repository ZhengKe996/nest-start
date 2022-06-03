import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get('say')
  say(): { name: string } {
    return this.catService.say();
  }

  @Get('sayhello')
  sayHello(): number[] {
    return this.catService.sayHello();
  }
}
