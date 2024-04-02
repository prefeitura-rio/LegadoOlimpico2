<script>
  export let name = "mask-name";
  export let imgPath = "";
  export let selected = "";

  export let positions = [];
  export let imageRange = [0, 1];

  import { fade } from "svelte/transition";
  import { scaleLinear } from "d3";

  const dev = process.env.NODE_ENV === "development";

  $: scale = scaleLinear().domain([0, 1]).range(imageRange);
</script>

<svg
  width="59vw"
  height="100vh"
  viewBox="0 0 {imageRange[1]} {imageRange[1]}"
  xmlns="http://www.w3.org/2000/svg"
  xml:space="preserve"
  style="margin-left:-90px !important;fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;overflow:visible"
>
  <g mask={`url(#mask-${name})`}>
    <image
      href={`${dev ? "/" : "/LegadoOlimpico2/"}assets/img/${imgPath}`}
      x="0"
      y="0"
      height="100%"
      width="100%"
    />
  </g>

  <mask transition:fade id={`mask-${name}`}>
    <rect
      x="0"
      y="0"
      width={imageRange[1]}
      height={imageRange[1]}
      fill="white"
      fill-opacity={0.1}
    />
    {#each positions[selected] as m}
      {#if m.rx > 0}
        <ellipse
          cx={scale(m.cx)}
          cy={scale(m.cy)}
          rx={scale(m.rx)}
          ry={scale(m.ry)}
          fill="white"
          transition:fade
        />
      {/if}
    {/each}
  </mask>

  {#each positions[selected] as m}
    {#if m.rx > 0}
      <ellipse
        class="circle-overlay"
        transition:fade
        cx={scale(m.cx)}
        cy={scale(m.cy)}
        rx={scale(m.rx)}
        ry={scale(m.ry)}
        fill="none"
        stroke-width="20"
      />
    {/if}
  {/each}
</svg>

<style>
  ellipse {
    transition: cx 700ms, cy 700ms, rx 700ms, ry 700ms;
  }
  ellipse.circle-overlay {
    stroke: var(--color-highlight);
  }
</style>
