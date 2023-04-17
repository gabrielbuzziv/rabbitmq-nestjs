import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MessagingModule } from './messaging/messaging.module';
import { MessagingService } from './messaging/messaging.service';

@Module({
  imports: [MessagingModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
