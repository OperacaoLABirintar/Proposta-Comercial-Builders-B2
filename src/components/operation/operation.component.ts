import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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