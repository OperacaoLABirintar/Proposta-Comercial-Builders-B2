
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
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
