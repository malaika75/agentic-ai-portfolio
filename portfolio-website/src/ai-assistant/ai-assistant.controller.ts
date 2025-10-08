import { Controller, Post, Body } from '@nestjs/common';
import { AiAssistantService } from './ai-assistant.service';

@Controller('api/ai-assistant')
export class AiAssistantController {
  constructor(private readonly aiAssistantService: AiAssistantService) {}

  @Post('chat')
  async chat(@Body() body: { message: string }) {
    const response = await this.aiAssistantService.chat(body.message);
    return { response };
  }
}
