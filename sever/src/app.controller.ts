import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('主入口')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Create cat' }) //描述作用
  @ApiResponse({ status: 200, description: '响应成功'})//描述响应码
  getHello(): string {
    return this.appService.getHello();
  }
}
