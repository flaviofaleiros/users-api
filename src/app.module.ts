import { Module } from '@nestjs/common';
import { UserModule } from './user/userModule';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
