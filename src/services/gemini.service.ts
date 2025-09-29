
import { Injectable } from '@angular/core';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';

@Injectable({ providedIn: 'root' })
export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // API key must be set in the environment variables
    if (!process.env.API_KEY) {
        console.error("API_KEY environment variable not set.");
    }
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async generateContent(prompt: string): Promise<string> {
    const systemInstruction = `Você é um assistente pedagógico criativo da LABirintar, uma EdTech especializada em programas extracurriculares inovadores. 
Você está ajudando a escola 'Builders' a planejar suas atividades. O programa é para alunos de 10 a 14 anos e foca em quatro eixos principais: Maker & Tecnologia, Arte & Expressão, Corpo & Cidade, e Vida & Futuro. 
Seu tom deve ser inspirador, colaborativo e profissional. Forneça respostas concisas, práticas e criativas para a consulta do usuário.`;
    
    try {
      const response: GenerateContentResponse = await this.ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
            topP: 0.9,
            topK: 40
          }
      });
      return response.text;
    } catch (error) {
      console.error('Error generating content with Gemini API:', error);
      return 'Ocorreu um erro ao gerar uma resposta. Por favor, verifique o console para mais detalhes.';
    }
  }
}
