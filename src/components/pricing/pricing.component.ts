import { Component, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tier {
  days: number;
  hours: number;
  price: number;
}

@Component({
  selector: 'app-pricing',
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
              <button 
                (click)="selectTier(tier)" 
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
  imports: [CommonModule]
})
export class PricingComponent {
  tiers: Tier[] = [
    { days: 1, hours: 1, price: 348 },
    { days: 2, hours: 2, price: 626 },
    { days: 3, hours: 3, price: 887 },
    { days: 4, hours: 4, price: 1113 },
    { days: 5, hours: 5, price: 1392 },
  ];

  selectedTier = signal<Tier>(this.tiers[0]);
  
  monthlyPrice = computed(() => this.selectedTier().price);

  selectTier(tier: Tier) {
    this.selectedTier.set(tier);
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0 
    }).format(value);
  }
}
