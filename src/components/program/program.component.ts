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
  template: `
<section class="py-20 bg-[#f4f0e8]">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-zinc-800">O Programa: Experiências com Propósito</h2>
      <p class="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
        Um currículo dinâmico e envolvente, projetado para despertar a curiosidade e construir habilidades essenciais.
      </p>
    </div>

    <div class="bg-white rounded-xl shadow-lg p-4 md:p-8">
      <div class="grid md:grid-cols-3 gap-8">
        <div class="md:col-span-1">
          <h3 class="text-2xl font-bold mb-4">Estrutura Semanal</h3>
          <div class="space-y-4">
            <div class="p-4 rounded-lg bg-zinc-100">
              <p class="text-zinc-600 text-sm">Os alunos participam de projetos fixos, com experiências de uma hora, oferecidas uma vez por semana, possibilitando algum tipo de integração.</p>
            </div>
          </div>
          <h3 class="text-2xl font-bold mt-8 mb-4">Eixos de Experiência</h3>
          <div class="flex flex-col space-y-2">
            @for(eixo of eixos; track eixo.name) {
              <button 
                (click)="selectEixo(eixo)"
                class="w-full text-left font-semibold p-4 rounded-lg transition-all duration-300"
                [class]="selectedEixo() === eixo ? eixo.color + ' text-zinc-800 shadow-md' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'">
                {{ eixo.name }}
              </button>
            }
          </div>
        </div>

        <div class="md:col-span-2">
          @if(selectedEixo(); as currentEixo) {
            <div class="p-6 rounded-lg" [class]="currentEixo.color">
              <h3 class="text-3xl font-bold text-zinc-800 mb-6">{{ currentEixo.name }}</h3>
              <div class="space-y-4">
                @for(exp of currentEixo.experiences; track exp.title) {
                  <div>
                    <h4 class="font-bold text-lg text-zinc-800">{{ exp.title }}</h4>
                    <p class="text-zinc-700">{{ exp.description }}</p>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  </div>
</section>
  `,
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
