import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { Role } from 'src/role.decorator';
import { RoleGuard } from 'src/role.guard';

@UseGuards(RoleGuard)
@Controller('user')
export class UserController {
  @Get(':id')
  @Role('accesss')
  getUserDetail(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
