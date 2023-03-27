import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  providers: [AppService],
  controllers: [AppController],
  imports: [UsersModule, AuthModule],
})
export class AppModule {}
