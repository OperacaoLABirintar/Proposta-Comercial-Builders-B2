
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision',
  template: `
<section class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-zinc-800">A Visão: Uma Parceria Simbiótica</h2>
      <p class="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
        Nossa proposta foi desenhada para criar um ecossistema vibrante dentro da Builders, entregando benefícios tangíveis para a escola, alunos e famílias.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      @for(point of visionPoints; track point.title) {
        <div class="bg-[#f4f0e8] p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div class="flex items-center space-x-4">
            <div class="bg-[#ffa400]/20 text-[#ffa400] rounded-full p-3">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="point.icon"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-zinc-800">{{ point.title }}</h3>
          </div>
          <p class="mt-4 text-zinc-600">
            {{ point.description }}
          </p>
        </div>
      }
    </div>
  </div>
</section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class VisionComponent {
  visionPoints = [
    {
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      title: 'Novas Fontes de Receita',
      description: 'Otimize espaços subutilizados e gere uma nova e significativa receita oferecendo um programa extracurricular premium e de alta demanda.'
    },
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Fortalecimento da Marca & Lealdade',
      description: 'Torne-se uma referência regional em educação inovadora, aumentando a retenção de alunos e atraindo novas famílias com uma proposta de valor única.'
    },
    {
      icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Maior Engajamento dos Alunos',
      description: 'Re-engaje adolescentes (10-14 anos) com experiências desejáveis e memoráveis que promovem criatividade, pertencimento e habilidades para a vida.'
    },
    {
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Operações Simplificadas',
      description: 'Nós cuidamos de tudo: curadoria de educadores, matrículas, pagamentos e comunicação, liberando sua equipe para focar nos objetivos pedagógicos centrais.'
    }
  ];
}
