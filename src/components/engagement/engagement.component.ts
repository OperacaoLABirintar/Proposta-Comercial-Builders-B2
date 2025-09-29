import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
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