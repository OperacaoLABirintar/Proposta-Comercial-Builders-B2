import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProgramComponent } from './components/program/program.component';
import { OperationComponent } from './components/operation/operation.component';
import { EngagementComponent } from './components/engagement/engagement.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  template: `
<div class="min-h-screen flex flex-col bg-[#f4f0e8] text-zinc-800">
  <app-header />
  <main class="flex-grow">
    <app-hero />

    <div id="program" class="pt-20 -mt-20">
      <app-program />
    </div>

    <div id="operation" class="pt-20 -mt-20">
      <app-operation />
    </div>

    <div id="engagement" class="pt-20 -mt-20">
      <app-engagement />
    </div>

    <div id="pricing" class="pt-20 -mt-20">
      <app-pricing />
    </div>

  </main>
  <app-footer />
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    ProgramComponent,
    OperationComponent,
    EngagementComponent,
    PricingComponent,
    FooterComponent
  ]
})
export class AppComponent {
  title = 'labirintar-proposal';
}
