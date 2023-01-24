<div class="flex flex-col justify-evenly w-full" style="grid-area: lk;">
  <div class="self-center">
    <div
      class="h-40 w-40 rounded-full bg-red-400 self-center"
      style="
          background-image: url(/images/Logo.jpg);
          background-position: center center;
          background-size: 120%;
          "
    />
    <h2 class="font-uber text-3xl font-bold text-zinc-80 self-center my-3">
      Paragracia
    </h2>
  </div>
  <div class="flex flex-col">
    <h4 class="m-2 text-2xl self-center">¡Seguinos en nuestras redes!</h4>
    <div class="flex flex-row h-14 justify-center space-x-10 my-8">
      <a href="https://www.facebook.com/mibusAG">
        <img src="/images/facebook.svg" alt="Twitter logo." class="h-full" />
      </a>
      <a href="https://www.linkedin.com/company/paragracia/">
        <img src="/images/linkedin.svg" alt="Twitter logo." class="h-full" />
      </a>
      <a href="">
        <img src="/images/twitter.svg" alt="Twitter logo." class="h-full" />
      </a>
    </div>
  </div>
  <slot />
</div>
