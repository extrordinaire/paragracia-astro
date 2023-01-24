<script lang="ts">
  import Prev_DestSave from "/public/images/Prev_DestSave.jpg";
  import Prev_Home from "/public/images/Prev_Home.jpg";
  import Prev_Lines from "/public/images/Prev_Lines.jpg";
  import Prev_Lineinfo from "/public/images/Prev_LineInfo.jpg";
  import Prev_TripInstruction from "/public/images/Prev_TripInstruction.jpg";
  import Prev_TripSelection from "/public/images/Prev_TripSelection.jpg";
  import Prev_LineView from "/public/images/Prev_LineView.jpg";

  import { tweened } from "svelte/motion";
  import { elasticOut, quadIn, quadInOut } from "svelte/easing";

  const images = [
    Prev_Home,
    Prev_Lines,
    Prev_LineView,
    Prev_Lineinfo,
    Prev_DestSave,
    Prev_TripInstruction,
    Prev_TripSelection,
  ] as const;

  let card: HTMLElement;
  let inclination = tweened(
    { x: 0, y: 0 },
    {
      duration: 400,
      easing: elasticOut,
    }
  );

  $: size = card ? card.getBoundingClientRect() : null;
  $: halfsize = size
    ? { x: size.width / 2, y: size.height / 2 }
    : { x: 0, y: 0 };
  $: if (card)
    card.style.transform = `rotateX(${$inclination.y}deg) rotateY(${$inclination.x}deg)`;
  $: console.table($inclination);
</script>

<div
  class="h-[45rem] items-center w-full justify-center flex"
  style="grid-area: sw;"
>
  <div class="flex h-full">
    <div
      on:mousemove={(e) => {
        inclination.set(
          {
            x: ((e.offsetX - halfsize.x) / halfsize.x) * 3,
            y: -((e.offsetY - halfsize.y) / halfsize.y) * 3,
          },
          { duration: 10, easing: quadIn }
        );
      }}
      on:mouseleave={() => {
        $inclination = {
          x: 0,
          y: 0,
        };
      }}
      class="h-full p-6"
      style="
        perspective: 10cm;
        perspective-origin: center;
      "
    >
      <!-- <button class="h-full" on:click={() => {}} style="pointer-events: ;"> -->
      <img
        src={Prev_Home}
        alt=""
        class="h-full border-2 border-solid border-gray-900 rounded-3xl shadow-gray-200 shadow-xl drop-shadow-2xl"
        bind:this={card}
      />

      <!-- </button> -->
    </div>
    <!-- <img class="relative h-4/5 p-6 left-10 -z-10" src={Prev_Lines} alt="" /> -->
  </div>
</div>
