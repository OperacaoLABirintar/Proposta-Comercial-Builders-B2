import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-operation',
  template: `
<section class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-zinc-800">A Operação: Fluida & com Suporte</h2>
      <p class="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
        Uma combinação de tecnologia e curadoria humana para uma experiência síncrona.
      </p>
    </div>

    <div class="relative wrap overflow-hidden p-10 h-full">
      <div class="absolute border-opacity-20 border-gray-700 h-full border" style="left: 50%"></div>
      
      @for(step of steps; track step.name; let i = $index) {
        <div class="mb-8 flex justify-between items-center w-full" [class]="i % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'">
          <div class="order-1 w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-[#ff595a] shadow-xl w-12 h-12 rounded-full">
            <h3 class="mx-auto font-semibold text-lg text-white">{{ i + 1 }}</h3>
          </div>
          <div class="order-1 bg-[#ff595a]/10 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-[#ff595a] text-xl">{{ step.name }}</h3>
            <p class="text-sm leading-snug tracking-wide text-zinc-700">
              {{ step.description }}
            </p>
          </div>
        </div>
      }
    </div>
  </div>
</section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class OperationComponent {
  steps = [
    {
      name: 'Onboarding & Configuração',
      description: 'Configuração colaborativa do programa, horários e integração do ecossistema à escola.',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
      name: 'Gestão da Plataforma',
      description: 'Nossa tecnologia cuida das matrículas, splitagem do pagamento, comunicação e inteligência de dados.',
      icon: 'M5 12h14M12 5l7 7-7 7'
    },
    {
      name: 'Rede de Educadores',
      description: 'Desenvolvemos uma rede de educadores empreendedores, garantindo projetos autorais, engajamento e excelência pedagógica.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
      name: 'Acompanhamento',
      description: 'Acompanhamento dedicado para a equipe da escola, educadores e famílias, através de um controle de qualidade que se pauta em escuta etnográfica, formações educativas e gestão orientada a dados.',
      icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
  ];
}
