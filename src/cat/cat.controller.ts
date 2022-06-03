import { Controller, Get } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Get('say')
  say(): { name: string } {
    return {
      name: 'hello',
    };
  }

  @Get('sayhello')
  sayHello(): number[] {
    return [1, 2, 3, 4, 5];
  }
}
