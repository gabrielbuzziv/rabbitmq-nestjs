import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagingService } from './messaging/messaging.service';

@Controller()
export class AppController {
  constructor(private readonly messagingService: MessagingService) {}

  @Get('send/:message')
  async send(@Param('message') message: string): Promise<string> {
    await this.messagingService.sendMessage(message);

    return 'Message sent to RabbitMQ';
  }
}
