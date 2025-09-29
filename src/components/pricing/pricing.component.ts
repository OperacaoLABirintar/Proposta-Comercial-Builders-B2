
import { Component, computed, signal, ChangeDetectionStrategy } from '@angular/core';

interface Tier {
  days: number;
  hours: number;
  price: number;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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