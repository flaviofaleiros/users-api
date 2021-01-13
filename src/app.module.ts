import { Module } from '@nestjs/common';
import { UserCotroller } from './user/user.controller';

@Module({
  imports: [],
  controllers: [UserCotroller],
  providers: [],
})
export class AppModule {}
