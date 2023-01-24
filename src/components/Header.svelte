<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { People, Bus, PersonInstance, BusInstance } from "./TitleLogic";

  const defaultTitle = "Paragracia 🚏            ";

  $: title = defaultTitle;

  let people: Array<PersonInstance> = [];
  let bus: BusInstance = new BusInstance("🚌", 50, 50);

  const layers = [defaultTitle, "", ""];

  onMount(() => {
    document.title = `${title}`;
  });

  const interval = setInterval(() => {
    title = bus.walk(defaultTitle);
    document.title = `${title}`;
  }, 500);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<h1
  class="md:text-5xl text-3xl text-center gradient md:my-16 my-4 px-10 w-full"
>
  <span class="text-gray-900"> Estamos reimaginando la </span>
  app
  <span class="text-gray-900"> que mueve </span>
  Alta Gracia
  <span class="text-gray-900"> . </span>
</h1>

<style>
  .gradient {
    @apply bg-clip-text text-transparent;
    background-image: var(--accent-gradient);
    background-size: 100%;
    background-position: 0%;
  }
</style>
