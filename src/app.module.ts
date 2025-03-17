import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ItemsModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
