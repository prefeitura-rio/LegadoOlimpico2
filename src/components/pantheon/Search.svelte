<script>
  import { getContext } from "svelte";

  import AutoComplete from "simple-svelte-autocomplete";
  import nodes from "$data/gods/tidy/nodes.json";

  const { selection } = getContext("chart-state");

  let selectedItem = undefined;
</script>

<div class="search">
  <AutoComplete
    bind:selectedItem
    items={nodes}
    labelFieldName="name"
    placeholder="Search a God..."
    hideArrow
    showClear
    onChange={() => selection.highlight(selectedItem)}
    debug={false}
  />
</div>

<style>
  .search {
    width: 100%;
  }
  .search :global(.autocomplete) {
    display: block;
    border-radius: 0;
  }
  .search :global(.autocomplete-input) {
    border: 0px solid var(--color-highlight);
    border-bottom: 1px solid var(--color-highlight);
    border-radius: 0;
    background-color: var(--color-background);
    color: var(--color-gray-dark);
    font-size: 1rem;
    padding: 0.3rem 0.6rem;
  }

  .search :global(.autocomplete-list) {
    border: 0px solid var(--color-highlight);
    background-color: var(--color-background-2);
  }
  .search :global(.autocomplete-list-item) {
    background-color: var(--color-background-2);
    color: var(--color-gray-dark);
  }
  .search :global(.autocomplete-list-item.confirmed) {
    background-color: var(--color-background-2);
    color: var(--color-gray-dark);
  }
  .search :global(.autocomplete-list-item.selected) {
    background-color: var(--color-highlight);
    color: var(--color-background-2);
  }
  .search :global(.autocomplete-clear-button) {
    color: var(--color-highlight);
  }
</style>
