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
  templateUrl: './app.component.html',
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