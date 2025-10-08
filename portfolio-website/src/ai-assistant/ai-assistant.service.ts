import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';

// Using blueprint:javascript_gemini integration
// Note that the newest Gemini model series is "gemini-2.5-flash" or "gemini-2.5-pro"
// do not change this unless explicitly requested by the user

@Injectable()
export class AiAssistantService {
  async chat(userMessage: string): Promise<string> {
    if (!process.env.GEMINI_API_KEY) {
      return 'AI Assistant is not configured. Please add your Gemini API key to enable this feature.';
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const systemInstruction = `You are a professional AI assistant for an Agentic AI Developer's portfolio website. 
Your role is to help visitors learn about the developer's skills in:
- Multi-Agent Systems development
- Python and OpenAI SDK
- LangChain framework
- Voice Agents and Chatbots
- Tool-calling and function execution
- Gemini and Streamlit applications

Be concise, professional, and helpful. Speak in first person as if you're representing the developer.
Keep responses brief (2-3 sentences) unless asked for detailed explanations.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: systemInstruction,
        },
        contents: userMessage,
      });

      return response.text || 'I apologize, I could not generate a response.';
    } catch (error) {
      console.error('AI Assistant error:', error);
      return 'I apologize, I am having trouble connecting right now. Please try again later.';
    }
  }
}
