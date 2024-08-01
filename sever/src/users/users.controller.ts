import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

@ApiTags('用户')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: '创建用户' })
  //@ApiResponse({ status: 200, description: '响应成功' }) //描述响应码
  create(@Body() createUserDto: Prisma.UserCreateManyInput) {
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  @ApiOperation({ summary: '用户登录' })
  login(@Body() loginDto: Prisma.UserCreateInput) {  
    return this.usersService.login(loginDto);
  }

  @Get()
  @ApiOperation({ summary: '查找所有用户' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '查找指定用户' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新指定用户' })
  update(@Param('id') id: string, @Body() updateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除指定用户' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
