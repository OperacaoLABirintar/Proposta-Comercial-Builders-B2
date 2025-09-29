
import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../services/gemini.service';

@Component({
  selector: 'app-creative-assistant',
  templateUrl: './creative-assistant.component.html',
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreativeAssistantComponent {
  private geminiService = inject(GeminiService);

  prompt = signal('');
  loading = signal(false);
  error = signal<string | null>(null);
  result = signal<string | null>(null);
  
  examplePrompts = [
    "Sugira um tema para nosso primeiro Festival Criativo.",
    "Como podemos conectar a atividade de 'Robótica Sustentável' com os valores da nossa escola?",
    "Me dê 3 ideias para um evento 'Jam Session Builders'.",
    "Escreva uma mensagem curta e empolgante para os pais sobre o programa de 'Empreendedorismo Jovem'.",
  ];

  async handleSubmit() {
    if (!this.prompt().trim()) return;

    this.loading.set(true);
    this.error.set(null);
    this.result.set(null);

    try {
      const response = await this.geminiService.generateContent(this.prompt());
      this.result.set(response);
    } catch (e) {
      this.error.set('Falha ao obter uma resposta do assistente de IA.');
      console.error(e);
    } finally {
      this.loading.set(false);
    }
  }

  setPrompt(example: string) {
    this.prompt.set(example);
  }
}
