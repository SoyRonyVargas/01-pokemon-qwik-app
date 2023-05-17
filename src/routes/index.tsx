import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  
  const count = useSignal(1);
 
  return (
    <main>
        <div>
          <h1 class="title is-1 has-text-centered	">{ count }</h1>

          <img 
            class="image is-128x128 align-center-img mb-5"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${count.value}.png`} 
            alt="Imagen" 
          />

          <div>
            <button class="button is-info" onClick$={() => count.value--}>
              Decrement 
            </button>
            <button class="button is-info ml-3" onClick$={() => count.value++}>
              Increment 
            </button>
            
          </div>
        </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
