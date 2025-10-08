import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

// Using blueprint:javascript_openai integration
// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user

@Injectable()
export class AiAssistantService {
  async chat(userMessage: string): Promise<string> {
    if (!process.env.OPENAI_API_KEY) {
      return 'AI Assistant is not configured. Please add your OpenAI API key to enable this feature.';
    }

    try {
      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      
      const response = await openai.chat.completions.create({
        model: 'gpt-5',
        messages: [
          {
            role: 'system',
            content: `You are a professional AI assistant for an Agentic AI Developer's portfolio website. 
            Your role is to help visitors learn about the developer's skills in:
            - Multi-Agent Systems development
            - Python and OpenAI SDK
            - LangChain framework
            - Voice Agents and Chatbots
            - Tool-calling and function execution
            - Gemini and Streamlit applications
            
            Be concise, professional, and helpful. Speak in first person as if you're representing the developer.
            Keep responses brief (2-3 sentences) unless asked for detailed explanations.`,
          },
          {
            role: 'user',
            content: userMessage,
          },
        ],
        max_completion_tokens: 500,
      });

      return response.choices[0].message.content || 'I apologize, I could not generate a response.';
    } catch (error) {
      console.error('AI Assistant error:', error);
      return 'I apologize, I am having trouble connecting right now. Please try again later.';
    }
  }
}
