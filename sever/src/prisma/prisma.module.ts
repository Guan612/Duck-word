import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 导出PrismaService，以便在其他模块中使用
})
export class PrismaModule {}
