
import { Component, ChangeDetectionStrategy } from '@angular/core';

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
  imports: []
})
export class HeroComponent {}
