
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
<footer class="bg-zinc-800 text-white">
  <div class="container mx-auto px-6 py-12">
    <div class="grid md:grid-cols-3 gap-8">
      <div>
        <div class="flex items-center space-x-2">
           <svg class="w-10 h-10 text-[#ffa400]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.1362 3.52593 17.9107 5.89849 19.696" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 13.6231 7.77189 15.0646 8.99513 15.992" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             <path d="M12 2V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             <path d="M3.33975 7.5L20.6603 16.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             <path d="M3.33975 16.5L20.6603 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
           </svg>
          <span class="text-2xl font-bold tracking-tighter" style="font-family: 'Aglet Slab', serif;">
            <span class="text-[#ff595a]">LAB</span><span class="text-[#ffa400]">irintar</span>
          </span>
        </div>
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
      <p>&copy; 2025 LABirintar. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class FooterComponent {}
