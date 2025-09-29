
import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GeminiService } from '../../services/gemini.service';

@Component({
  selector: 'app-creative-assistant',
  template: `
<section class="py-20 bg-[#f4f0e8]">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-zinc-800">Vamos Co-criar Juntos</h2>
      <p class="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
        Use nosso assistente criativo com IA para gerar ideias e personalizar o programa para a Builders.
      </p>
    </div>

    <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <form (ngSubmit)="handleSubmit()">
        <textarea 
          [(ngModel)]="prompt"
          name="prompt"
          rows="4"
          class="w-full p-4 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#ffa400] focus:outline-none transition-shadow"
          placeholder="Ex: Como podemos integrar Esportes Urbanos com nossas metas de sustentabilidade?"></textarea>
        
        <div class="my-4">
          <p class="text-sm text-zinc-600 mb-2">Ou tente um exemplo:</p>
          <div class="flex flex-wrap gap-2">
            @for(p of examplePrompts; track p) {
              <button type="button" (click)="setPrompt(p)" class="text-xs bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full hover:bg-zinc-200 transition-colors">
                {{ p }}
              </button>
            }
          </div>
        </div>

        <button 
          type="submit" 
          [disabled]="loading()"
          class="w-full mt-2 bg-[#ffa400] text-zinc-800 font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 disabled:bg-zinc-300 disabled:cursor-not-allowed">
          @if(loading()) {
            <span>Gerando...</span>
          } @else {
            <span>Gerar Ideias</span>
          }
        </button>
      </form>

      <div class="mt-8">
        @if(loading()) {
          <div class="flex items-center justify-center space-x-2 text-zinc-600">
            <svg class="animate-spin h-5 w-5 text-[#ffa400]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Pensando criativamente...</span>
          </div>
        }
        @if (error()) {
          <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md">
            <p>{{ error() }}</p>
          </div>
        }
        @if(result()) {
          <div class="prose max-w-none p-6 bg-zinc-50 rounded-lg border border-zinc-200 whitespace-pre-wrap">
            <p>{{ result() }}</p>
          </div>
        }
      </div>
    </div>
  </div>
</section>
  `,
  imports: [FormsModule, CommonModule],
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
