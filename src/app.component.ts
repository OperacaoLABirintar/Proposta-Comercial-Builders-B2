
import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisionComponent } from './components/vision/vision.component';
import { CreativeAssistantComponent } from './components/creative-assistant/creative-assistant.component';

// --- Header Component Definition ---
@Component({
  selector: 'app-header',
  template: `
<header class="sticky top-0 z-50 bg-[#f4f0e8]/80 backdrop-blur-md shadow-sm">
  <div class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img src="https://raw.githubusercontent.com/OperacaoLABirintar/Proposta-Comercial-Builders-B2/main/IMG_5430.png" alt="LABirintar & Builders Logo" class="h-10">
      </div>
    </div>
  </div>
</header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class HeaderComponent {}

// --- Hero Component Definition ---
@Component({
  selector: 'app-hero',
  template: `
<section class="relative bg-cover bg-center py-24 md:py-40" style="background-color: #ffe9c9;">
  <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
  <div class="container mx-auto px-6 text-center relative z-10">
    <h1 class="text-4xl md:text-6xl font-bold text-zinc-800 leading-tight">
      Builders & <span class="text-[#ff595a]">LAB</span><span class="text-[#ffa400]">irintar</span>: <br>Educar é dar sentido ao tempo
    </h1>
    <p class="mt-6 text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto">
      Uma proposta exclusiva para a Builders School B2 para co-criarmos uma experiência extracurricular memorável para 2026, impulsionada pelo ecossistema LABirintar.
    </p>
  </div>
</section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class HeroComponent {}

// --- Program Component Definition ---
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
  imports: [CommonModule],
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
              <button (click)="selectEixo(eixo)"
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
})
class ProgramComponent {
  eixos: Eixo[] = [
    { name: 'Maker & Tecnologia', color: 'bg-[#e6cbe4]', experiences: [{ title: 'Marcenaria Criativa', description: 'Construa objetos funcionais e artísticos do zero.' },{ title: 'Criação de Jogos (Tabuleiro & Digitais)', description: 'Desenhe, prototipe e teste seus próprios jogos.' },{ title: 'Robótica Sustentável', description: 'Monte e programe robôs para desafios cooperativos.' },{ title: 'Drone Educativo', description: 'Aprenda pilotagem segura, fotografia aérea e circuitos criativos.' },] },
    { name: 'Arte & Expressão', color: 'bg-[#aec5e7]', experiences: [{ title: 'Fotografia & Narrativas', description: 'Domine a linguagem e técnicas para contar histórias envolventes.' },{ title: 'Improvisação & RPG', description: 'Desenvolveva a criatividade e a colaboração através da narração de histórias coletivas.' },{ title: 'Xadrez para a Vida', description: 'Aprenda lógica, estratégia e competências socioemocionais através do jogo.' },] },
    { name: 'Corpo & Cidade', color: 'bg-[#b2dcd5]', experiences: [{ title: 'Circuito Acrobático Circense', description: 'Explore trapézio, slackline, equilíbrio e cooperação física.' },{ title: 'Esportes Urbanos/Coletivos', description: 'Participe de modalidades esportivas inclusivas e colaborativas.' },{ title: 'Projeto CidadeVamos', description: 'Vivencie a cidade como sala de aula através de explorações urbanas educativas.' },] },
    { name: 'Vida & Futuro', color: 'bg-[#ffe9c9]', experiences: [{ title: 'Cozinhas & Infâncias', description: 'Participe de oficinas práticas de culinária e cultura alimentar.' },{ title: 'Empreendedorismo Jovem', description: 'Crie soluções reais, desde pitches até protótipos.' },{ title: 'Olimpíada de Educação Financeira', description: 'Aprenda sobre consumo consciente através de jogos e dinâmicas envolventes.' },] }
  ];
  selectedEixo = signal<Eixo>(this.eixos[0]);

  selectEixo(eixo: Eixo) {
    this.selectedEixo.set(eixo);
  }
}

// --- Operation Component Definition ---
interface Step {
  name: string;
  description: string;
}
@Component({
  selector: 'app-operation',
  imports: [CommonModule],
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
            <p class="text-sm leading-snug tracking-wide text-zinc-700">{{ step.description }}</p>
          </div>
        </div>
      }
    </div>
  </div>
</section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class OperationComponent {
  steps: Step[] = [
    { name: 'Onboarding & Configuração', description: 'Configuração colaborativa do programa, horários e integração do ecossistema à escola.' },
    { name: 'Gestão da Plataforma', description: 'Nossa tecnologia cuida das matrículas, splitagem do pagamento, comunicação e inteligência de dados.' },
    { name: 'Rede de Educadores', description: 'Desenvolvemos uma rede de educadores empreendedores, garantindo projetos autorais, engajamento e excelência pedagógica.' },
    { name: 'Acompanhamento', description: 'Acompanhamento dedicado para a equipe da escola, educadores e famílias, através de um controle de qualidade que se pauta em escuta etnográfica, formações educativas e gestão orientada a dados.' },
  ];
}

// --- Engagement Component Definition ---
interface TimelineItem {
  date: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-engagement',
  imports: [CommonModule],
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
})
class EngagementComponent {
  timeline: TimelineItem[] = [
    { date: 'Nov 2025', title: 'Evento de Pré-lançamento', description: 'Ação de divulgação e engajamento na escola com estações de experimentação e pré-cadastro online via QR code.' },
    { date: 'Jan-Fev 2026', title: 'Ativação Inicial', description: 'Vídeos curtos com educadores, aulas experimentais abertas e kits de boas-vindas digitais para as famílias.' },
    { date: 'Mar-Abr 2026', title: 'Construção de Comunidade', description: 'Mini-oficinas e demonstrações nos corredores da escola. Mini-torneios (xadrez, robótica, esportes).' },
    { date: 'Jun 2026', title: 'Jam Session Builders', description: 'Um evento criativo aberto à comunidade, mostrando os trabalhos e experiências dos alunos.' },
    { date: 'Jul 2026', title: 'Programa de Férias', description: 'Oficinas intensivas especiais, tours fotográficos pela cidade e game jams internas.' },
    { date: 'Nov-Dez 2026', title: 'Festival Criativo', description: 'Grande mostra das produções dos alunos (jogos, fotos, etc.). Lançamento oficial da campanha de matrículas de 2027.' }
  ];
}

// --- Pricing Component Definition ---
interface Tier {
  days: number;
  hours: number;
  price: number;
}
@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  template: `
<section class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-zinc-800">Preços & Valor</h2>
      <p class="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
        Preços acessíveis e escaláveis, desenhados para incentivar a participação e maximizar o valor.
      </p>
    </div>
    <div class="max-w-4xl mx-auto bg-[#f4f0e8] rounded-2xl shadow-lg p-8">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 class="text-2xl font-bold text-zinc-800">Mensalidade Sugerida por Aluno</h3>
          <p class="text-zinc-600 mt-2">Selecione uma frequência para ver o preço.</p>
          <div class="mt-6 flex flex-wrap gap-2">
            @for(tier of tiers; track tier.days) {
              <button (click)="selectTier(tier)"
                class="px-4 py-2 rounded-full font-semibold transition-colors duration-300"
                [class]="selectedTier() === tier ? 'bg-[#ff595a] text-white' : 'bg-white hover:bg-zinc-200 text-zinc-700'">
                {{ tier.days }}x semana
              </button>
            }
          </div>
        </div>
        <div class="bg-white rounded-xl p-8 text-center shadow-inner">
          <p class="text-lg font-medium text-zinc-600">{{ selectedTier().days }}x por semana ({{ selectedTier().hours }}h)</p>
          <p class="text-5xl font-bold text-[#ff595a] my-2">{{ formatCurrency(monthlyPrice()) }}</p>
          <p class="text-zinc-500">por mês</p>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class PricingComponent {
  tiers: Tier[] = [
    { days: 1, hours: 1, price: 348 }, { days: 2, hours: 2, price: 626 }, { days: 3, hours: 3, price: 887 },
    { days: 4, hours: 4, price: 1113 }, { days: 5, hours: 5, price: 1392 },
  ];
  selectedTier = signal(this.tiers[0]);
  monthlyPrice = computed(() => this.selectedTier().price);
  selectTier(tier: Tier) { this.selectedTier.set(tier); }
  formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
  }
}

// --- Footer Component Definition ---
@Component({
  selector: 'app-footer',
  template: `
<footer class="bg-zinc-800 text-white">
  <div class="container mx-auto px-6 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div>
        <img src="https://raw.githubusercontent.com/OperacaoLABirintar/Proposta-Comercial-Builders-B2/main/IMG_5430.png" alt="LABirintar & Builders Logo" class="h-12">
      </div>
      <div>
        <h3 class="text-lg font-semibold text-white">Uma Proposta Para</h3>
        <p class="mt-4 text-zinc-300 font-bold text-lg">Builders School B2</p>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-white">Nosso Site</h3>
        <a href="https://www.labirintar.com.br" target="_blank" rel="noopener noreferrer" class="mt-4 inline-block text-[#ffa400] hover:text-[#ffc14d] transition-colors">
          www.labirintar.com.br
        </a>
      </div>
    </div>
    <div class="mt-12 border-t border-zinc-700 pt-8 text-center text-zinc-500">
      <p>&copy; 2025 Todos os direitos reservados.</p>
    </div>
  </div>
</footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class FooterComponent {}

// --- Main Application Component ---
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    ProgramComponent,
    VisionComponent,
    OperationComponent,
    EngagementComponent,
    PricingComponent,
    CreativeAssistantComponent,
    FooterComponent
  ],
  template: `
<div class="min-h-screen flex flex-col bg-[#f4f0e8] text-zinc-800">
  <app-header />
  <main class="flex-grow">
    <app-hero />
    <app-program />
    <app-vision />
    <app-operation />
    <app-engagement />
    <app-pricing />
    <app-creative-assistant />
  </main>
  <app-footer />
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'labirintar-proposal';
}
