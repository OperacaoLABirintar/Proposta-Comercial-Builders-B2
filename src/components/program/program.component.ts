import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  description: string;
}

interface Eixo {
  name: string;
  color: string;
  experiences: Experience[];
}

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class ProgramComponent {
  eixos: Eixo[] = [
    {
      name: 'Maker & Tecnologia',
      color: 'bg-[#e6cbe4]',
      experiences: [
        { title: 'Marcenaria Criativa', description: 'Construa objetos funcionais e artísticos do zero.' },
        { title: 'Criação de Jogos (Tabuleiro & Digitais)', description: 'Desenhe, prototipe e teste seus próprios jogos.' },
        { title: 'Robótica Sustentável', description: 'Monte e programe robôs para desafios cooperativos.' },
        { title: 'Drone Educativo', description: 'Aprenda pilotagem segura, fotografia aérea e circuitos criativos.' },
      ]
    },
    {
      name: 'Arte & Expressão',
      color: 'bg-[#aec5e7]',
      experiences: [
        { title: 'Fotografia & Narrativas', description: 'Domine a linguagem e técnicas para contar histórias envolventes.' },
        { title: 'Improvisação & RPG', description: 'Desenvolva a criatividade e a colaboração através da narração de histórias coletivas.' },
        { title: 'Xadrez para a Vida', description: 'Aprenda lógica, estratégia e competências socioemocionais através do jogo.' },
      ]
    },
    {
      name: 'Corpo & Cidade',
      color: 'bg-[#b2dcd5]',
      experiences: [
        { title: 'Circuito Acrobático Circense', description: 'Explore trapézio, slackline, equilíbrio e cooperação física.' },
        { title: 'Esportes Urbanos/Coletivos', description: 'Participe de modalidades esportivas inclusivas e colaborativas.' },
        { title: 'Projeto CidadeVamos', description: 'Vivencie a cidade como sala de aula através de explorações urbanas educativas.' },
      ]
    },
    {
      name: 'Vida & Futuro',
      color: 'bg-[#ffe9c9]',
      experiences: [
        { title: 'Cozinhas & Infâncias', description: 'Participe de oficinas práticas de culinária e cultura alimentar.' },
        { title: 'Empreendedorismo Jovem', description: 'Crie soluções reais, desde pitches até protótipos.' },
        { title: 'Olimpíada de Educação Financeira', description: 'Aprenda sobre consumo consciente através de jogos e dinâmicas envolventes.' },
      ]
    }
  ];

  selectedEixo = signal<Eixo>(this.eixos[0]);

  selectEixo(eixo: Eixo) {
    this.selectedEixo.set(eixo);
  }
}