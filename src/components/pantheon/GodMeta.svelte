<script>
  import doc from "$data/doc.json";
  import { getFieldLabel } from "$domain/getters";
  import { getContext } from "svelte";
  import { FIELDS } from "$domain/constants";

  export let preventInteraction = false;

  const { keyword } = getContext("chart-state");
</script>

<fieldset class="wrapper" style="pointer-events:{preventInteraction ? 'none' : 'all'};">
  <legend class="hidden">{@html doc.pantheon_control_map}</legend>
  {#each FIELDS as field}
    <button class:selected={$keyword === field} on:click={() => keyword.highlight(field)}>
      {getFieldLabel(field)}
    </button>
  {/each}
  <button class="text-button" disabled={!$keyword} on:click={() => keyword.lowlight()}>Reset</button
  >
</fieldset>

<style>
  fieldset.wrapper {
    position: relative;
    padding: 1rem;
    margin: 0;

    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    flex-wrap: wrap;
  }

  button {
    margin: 0 0.5rem 0.5rem 0;
  }
  button.text-button {
    display: inline-block;

    background: transparent;
    border: none;

    text-decoration: underline;
    text-decoration-color: var(--color-highlight);

    color: currentColor;

    margin: 0;
    padding: 0;
  }
  button.text-button:hover,
  button.text-button:focus {
    text-decoration-thickness: 2px;
    box-shadow: none;
  }
  button.text-button:disabled {
    cursor: unset;
    pointer-events: none;
    text-decoration-thickness: 1px;
    opacity: 0.2;
  }
</style>
