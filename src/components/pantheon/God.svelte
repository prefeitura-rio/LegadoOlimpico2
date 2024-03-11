<script>
  import { getContext } from "svelte";
  import { getMainGodColor } from "$domain/getters";
  import variables from "$data/variables.json";

  const dev = process.env.NODE_ENV === "development";

  export let god;
  export let godIndex = 0;

  const {
    bounds,
    xScale,
    yScale,
    getName,
    getImportance,
    interaction,
    selection,
    radiusScale,
    keyword
  } = getContext("chart-state");

  // Interaction Parameters
  // Highlight = hover
  // Selection = selected
  $: highlightExists = $interaction !== undefined;
  $: isHighlighted = highlightExists && $interaction === god.name;

  $: selectionExists = $selection !== undefined;
  $: isSelected = selectionExists && getName($selection) === god.name;

  $: fieldIsSelected = god[$keyword] === 1;

  $: opacity = $keyword && !fieldIsSelected && !isHighlighted && !isSelected ? 0.1 : 1;
  // Geometric parameters
  $: rad = $radiusScale(getImportance(god));

  $: borderWidth = rad * 0.01;

  $: borderColor = isSelected || isHighlighted ? "black" : variables.category.secondary;
  $: color = getMainGodColor(god.importance);
  $: backgroundColor = isSelected ? "black" : isHighlighted ? variables.color["gray-light"] : color;

  $: x = $xScale(god.x) + $bounds.margins.left;
  $: y = $yScale(god.y) + $bounds.margins.top;

  /**
   * SPRITE DIMENSIONS AND POSITION
   *
   * Add 3 px to single sprite image (for some reason)
   *
   * sprite full width = 54800px
   * width of single sprite images = 403px
   *
   * bg-size:
   *  width: 100%
   *  height: 54800px / 400px = 13700%
   *
   * bg-position:
   *  y: 0
   *  x: 400px * index / 54800px * 100
   *
   */

  const FULL_SPRITE_WIDTH = 54800;
  const SINGLE_IMAGE_WIDTH = 400;
  const OFFSET = 3;
</script>

<figure
  class="god-image"
  tabindex="-1"
  style="width:{rad}px; height: {rad}px; left:{x}px; top:{y}px; background-color: {backgroundColor}; border: {borderWidth}px solid {borderColor}; 
  background-image: url({`${
    dev ? '/' : '/2022/06/aztec-gods/'
  }assets/gods/sprite/gods.sprite.png`});
  transform: translate(-50%, -50%); z-index: {isHighlighted ? 20 : 10};
  opacity:{opacity}; background-position: 0% {(((SINGLE_IMAGE_WIDTH + OFFSET) * godIndex) /
    FULL_SPRITE_WIDTH) *
    100}%; background-size: 100% 13700%;"
/>

<style>
  .god-image {
    position: absolute;

    border-radius: 2px;
    pointer-events: none;

    display: inline-block;
    background-repeat: no-repeat;
  }
</style>
