import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DbService } from './db/db.service';
import { DbModule } from './db/db.module';

@Module({
  imports: [UsersModule, AuthModule, DbModule],
  controllers: [AppController],
  providers: [AppService, DbService,],
})
export class AppModule {}
