import {
  Controller,
  Get,
  Query,
  Param,
  Delete,
  Put,
  Post,
  Body,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}
  @Get()
  go() {
    return this.catService.findAll();
  }

  @Get('say')
  say(): { name: string } {
    return this.catService.say();
  }

  @Get('sayhello')
  sayHello(): number[] {
    return this.catService.sayHello();
  }

  @Get('sayquery')
  sayVersion(@Query() qeury: Record<string, any>) {
    return qeury;
  }

  @Get('find/:id')
  findOne(@Param() params): string {
    return params;
  }

  @Delete(':id')
  delete(@Param() params: { id: number }) {
    return {
      id: Number(params.id),
      msg: '删除成功',
    };
  }

  @Put(':id')
  put(@Param() params: { id: number }) {
    return {
      id: Number(params.id),
      msg: '更新成功',
    };
  }

  @Get(':id')
  get(@Param() params: { id: number }) {
    return {
      id: Number(params.id),
      msg: '获取成功',
    };
  }

  @Post('/ret')
  post(@Body() cat: Record<string, any>) {
    return cat;
  }
  @Post()
  push(@Body() cat: CreateCatDto) {
    this.catService.create(cat);
    return this.catService.findAll();
  }
}
