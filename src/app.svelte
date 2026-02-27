<script lang="ts">
  import TopBar from "$lib/components/top-bar.svelte";
import { CONTACT_URL, GITHUB_URL } from "$lib/const";
</script>

<main class="container mx-auto max-w-256 flex flex-col my-8 p-4">
  <TopBar />
  <div class="flex flex-col md:grid grid-cols-6 grid-rows-6 gap-4 w-full mt-16 *:border *:border-orange-200 *:p-4 *:rounded-xl *:bg-white *:shadow *:shadow-orange-700/25 *:flex *:flex-col *:items-center *:gap-4">
      <div class="col-span-2 row-span-2 !items-end">
        <p class="text-foreground/75 mt-auto">Guarana Studio is an experienced Svelte and web development team. Need help with custom projects?</p>
        <a href={CONTACT_URL} class="btn-link font-semibold text-orange-700">Contact us</a>
      </div>
      <div class="col-span-2 col-start-3">
        <div class="flex items-center gap-2">
          <img src="/eu.svg" class="size-8" alt="Europe" />
          <p class="text-foreground/75">We are Europe-based, and we build open source with passion.</p>
        </div>
      </div>
      <div class="col-span-2 row-span-4 col-start-5">
        <img src="/conti.svg" class="rounded-lg size-36 my-auto" alt="Conti" />
        <h2 class="text-lg font-semibold w-full">Conti</h2>
        <p class="text-foreground/75">Refined way to chat with AI. Funnel your ideas and stay organized.</p>
      </div>
      <a href="https://github.com/oxidejs/oxide" target="_blank" rel="noopener noreferrer" class="col-span-2 row-span-4 col-start-3 row-start-2" title="Oxide.js">
        <img src="/oxide.svg" class="rounded-lg size-36 my-auto" alt="Oxide.js" />
        <h2 class="text-lg font-semibold w-full">Oxide.js</h2>
        <p class="text-foreground/75">Highly adjustable, Nitro based, modern Svelte Web Framework.</p>
      </a>
      <a href="https://docsome.guarana.studio/" target="_blank" class="col-span-2 row-span-4 row-start-3" title="Docsome">
        <img src="/docsome.png" class="rounded-lg my-auto" alt="Docsome" />
        <h2 class="text-lg font-semibold w-full">Docsome</h2>
        <p class="text-foreground/75">Build elegant documentation site with just a single Markdown file.</p>
      </a>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" class="col-span-2 col-start-3 row-start-6" title="GitHub">
        <div class="flex items-center justify-center flex-1 gap-2">
          <img src="/github.svg" class="size-8" alt="GitHub" />
          <p class="text-orange-700 font-semibold">Visit our GitHub</p>
        </div>
      </a>
      <div class="col-span-2 row-span-2 col-start-5 row-start-5">
        <p class="text-foreground/75 my-auto">We've built over 8 open-source libraries for web development and deployed over 20 applications to production.</p>
      </div>
  </div>
</main>