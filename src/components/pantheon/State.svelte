<script>
  import nodes from "$data/gods/tidy/nodes.json";
  import doc from "$data/doc.json";
  import viewport from "$stores/viewport";
  import TextButton from "$components/layout/TextButton.svelte";

  import { getImportance, getName, GR, KEYWORDS, TYPE_SCALE } from "$domain/constants.js";
  import { max, scaleLinear, scaleOrdinal } from "d3";
  import { setContext } from "svelte";
  import { derived, writable } from "svelte/store";

  export let activeStep = doc.pantheon[0];

  let width = writable(0);

  const margins = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  };
  const controlledWidth = derived([width, viewport], ([$width, $viewport]) =>
    Math.min($width, $viewport.height - 64 - margins.top - margins.bottom)
  );

  const bounds = derived([controlledWidth], ([$controlledWidth]) => ({
    width: $controlledWidth,
    height: $controlledWidth,
    margins,
    chartWidth: $controlledWidth - margins.left - margins.right,
    chartHeight: $controlledWidth - margins.top - margins.bottom
  }));

  // Maximum domain extent of the force layout
  $: allX = nodes.map((d) => d.x);

  $: xMax = max(allX, (d) => Math.abs(d));
  $: allY = nodes.map((d) => d.y);
  $: yMax = max(allY, (d) => Math.abs(d));
  $: mapOuterDomain = Math.max(xMax, yMax);

  $: godDomain = [...new Set(nodes.map((d) => getName(d)))];

  // Interaction
  const createInteraction = () => {
    const { subscribe, set } = writable(undefined);
    return {
      subscribe,
      highlight: (d) => set(d),
      lowlight: () => set(undefined)
    };
  };
  const interaction = createInteraction();

  const createSelection = () => {
    const { subscribe, set } = writable(undefined);
    return {
      subscribe,
      highlight: (d) => set(d),
      lowlight: () => set(undefined)
    };
  };
  const selection = createSelection();

  // Keywords
  const createKeywordHighlight = () => {
    const { subscribe, set } = writable(undefined);
    return {
      subscribe,
      highlight: (d) => set(d),
      lowlight: () => set(undefined)
    };
  };
  const keyword = createKeywordHighlight();

  // Scales
  $: xScale = derived([bounds], ([$bounds]) => {
    let domain = [-mapOuterDomain, mapOuterDomain];
    return scaleLinear()
      .domain(domain)
      .range([0, $bounds.chartWidth - 20]);
  });
  $: yScale = derived([bounds], ([$bounds]) => {
    let domain = [-mapOuterDomain, mapOuterDomain];
    return scaleLinear()
      .domain(domain)
      .range([$bounds.chartHeight - 20, 0]);
  });

  // FIXME: radiusScale can be removes everywhere is is used
  $: radiusScale = derived([bounds], ([$bounds]) => {
    let base = $bounds.chartWidth * 0.06;
    return scaleOrdinal().domain(TYPE_SCALE).range([base]);
    // .range([base * (GR * 4), base * (GR * 3), base * (GR * 2), base * GR, base]);
  });

  $: _nodes = writable(nodes);

  // state updates on scroll
  $: if (activeStep.selected !== "") {
    let god = $_nodes.find((node) => node.name === activeStep.selected);
    selection.highlight(god);
  } else {
    selection.highlight(undefined);
  }

  $: if (activeStep.keyword !== "") {
    keyword.highlight(activeStep.keyword);
  } else {
    keyword.highlight(undefined);
  }

  // Context
  $: context = {
    bounds,
    nodes: _nodes,
    xScale,
    yScale,
    getName,

    getImportance,
    keywords: KEYWORDS,

    godDomain,
    radiusScale,

    interaction,
    selection,
    keyword
  };
  $: setContext("chart-state", context);
</script>

<div class="wrapper" data-name="wrapper-in-state">
  <div class="info" data-name="info-in-state">
    <slot name="info" />
  </div>

  <div class="meta" data-name="meta-in-state"><slot name="meta" /></div>
  <div class="chart-wrapper" bind:clientWidth={$width}>
    <div
      class="chart-centered-container"
      style="width:{$bounds.width}px; height:{$bounds.height}px;"
    >
      {#if $width > 0}
        <!-- <svg class="chart-svg" width={$bounds.width} height={$bounds.height}>
          <slot name="chart-svg" />
        </svg> -->
        <div class="chart-html" style="width:{$bounds.width}px; height:{$bounds.height}px;">
          <slot name="chart-html" />
        </div>
        <svg class="chart-svg" width={$bounds.width} height={$bounds.height}>
          <slot name="chart-svg-overlay" />
        </svg>
      {/if}
    </div>
  </div>
</div>

<style>
  .wrapper {
    /* background-color: forestgreen; */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3.5rem 4.5rem 1fr;
    grid-template-areas:
      "info-area"
      "meta-area"
      "viz-area";

    /* position: relative; */
    min-height: 95vh;

    /* border-bottom: 3px solid var(--color-highlight); */
  }
  .info {
    grid-area: info-area;
    position: relative;
    z-index: 50;
  }
  .chart-wrapper {
    grid-area: viz-area;
    z-index: 20;
    /* background-color: aquamarine; */
  }
  .chart-centered-container {
    margin: auto;
    position: relative;
    /* background-color: aqua; */
  }
  .chart-html,
  .chart-svg {
    position: absolute;
    top: 0;
    left: 0;
    overflow: visible;
  }

  .meta {
    grid-area: meta-area;
    /* position: relative; */
    z-index: 30;
  }

  @media only screen and (min-width: 50em) {
    .wrapper {
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 3.5rem 1fr;
      grid-template-areas:
        "meta-area info-area"
        "viz-area info-area";
    }
    .info {
      grid-area: info-area;
    }
    .chart-wrapper {
      /* height: auto; */
    }
  }
</style>
