<script>
  import { Delaunay, pointer } from "d3";
  import { getContext } from "svelte";

  export let noPointerEvents = false;
  export let debug = false;

  let overlay; // ref

  const { bounds, xScale, yScale, getName, nodes, interaction, selection } =
    getContext("chart-state");

  // Overlay Logic
  $: delaunay = Delaunay.from(
    $nodes,
    (d) => $xScale(d.x),
    (d) => $yScale(d.y)
  );
  $: voronoi = delaunay.voronoi([0, 0, $bounds.chartWidth, $bounds.chartHeight]);
</script>

<g data-name="overlay" transform={`translate(${$bounds.margins.left}, ${$bounds.margins.top})`}>
  {#each $nodes as node, i}
    <path
      tabindex="-1"
      d={voronoi.renderCell(i)}
      class:no-event={noPointerEvents}
      fill="hotpink"
      fill-opacity={debug ? 0.2 : 0}
      stroke={debug ? "white" : "none"}
      stroke-opacity={1}
      on:click={() => selection.highlight(node)}
      on:mousemove={() => interaction.highlight(getName(node))}
      on:mouseenter={() => interaction.highlight(getName(node))}
      on:focus={() => interaction.highlight(getName(node))}
      on:mouseout={() => interaction.highlight(undefined)}
      on:blur={() => interaction.highlight(undefined)}
    />
  {/each}
</g>

<style>
  path {
    cursor: pointer;
  }
  path:focus {
    outline: none;
  }
  path.no-event {
    pointer-events: none;
  }
  rect {
    cursor: pointer;
  }
</style>
