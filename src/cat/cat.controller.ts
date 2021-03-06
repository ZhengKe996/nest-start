import {
  Controller,
  Get,
  Query,
  Param,
  Delete,
  Put,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseFilters,
  UseInterceptors,
  ParseIntPipe,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
// import { HttpExceptionFilter } from '../http-exception.filter';
// @UseFilters(HttpExceptionFilter)
import { MyLoggingInterceptor } from '../my-logging.interceptor';
@UseInterceptors(MyLoggingInterceptor)
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}
  @Get()
  go() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

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

  @Get('find')
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
  get(@Param('id', new ParseIntPipe()) id: number) {
    return {
      id: id,
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
