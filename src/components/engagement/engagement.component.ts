import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-engagement',
  template: `
<section class="py-20 bg-[#f4f0e8]">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-zinc-800">Plano de Engajamento & Ativação</h2>
      <p class="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
        Uma jornada de um ano com rituais e eventos para construir entusiasmo, pertencimento e uma comunidade vibrante.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      @for(item of timeline; track item.title) {
        <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#ffa400] hover:shadow-lg transition-shadow duration-300">
          <p class="text-sm font-bold text-[#ffa400] mb-2">{{ item.date }}</p>
          <h3 class="text-xl font-bold text-zinc-800 mb-2">{{ item.title }}</h3>
          <p class="text-zinc-600">{{ item.description }}</p>
        </div>
      }
    </div>
  </div>
</section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class EngagementComponent {
  timeline = [
    {
      date: 'Nov 2025',
      title: 'Evento de Pré-lançamento',
      description: 'Ação de divulgação e engajamento na escola com estações de experimentação e pré-cadastro online via QR code.'
    },
    {
      date: 'Jan-Fev 2026',
      title: 'Ativação Inicial',
      description: 'Vídeos curtos com educadores, aulas experimentais abertas e kits de boas-vindas digitais para as famílias.'
    },
    {
      date: 'Mar-Abr 2026',
      title: 'Construção de Comunidade',
      description: 'Mini-oficinas e demonstrações nos corredores da escola. Mini-torneios (xadrez, robótica, esportes).'
    },
    {
      date: 'Jun 2026',
      title: 'Jam Session Builders',
      description: 'Um evento criativo aberto à comunidade, mostrando os trabalhos e experiências dos alunos.'
    },
    {
      date: 'Jul 2026',
      title: 'Programa de Férias',
      description: 'Oficinas intensivas especiais, tours fotográficos pela cidade e game jams internas.'
    },
    {
      date: 'Nov-Dez 2026',
      title: 'Festival Criativo',
      description: 'Grande mostra das produções dos alunos (jogos, fotos, etc.). Lançamento oficial da campanha de matrículas de 2027.'
    }
  ];
}
