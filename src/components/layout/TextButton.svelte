<script>
  import Icon from "$components/helpers/Icon.svelte";
  export let disabled = false;
  export let iconName = undefined;
  export let position = "start"; // "start" | "end"
  export let buttonLabel = "";
  export let handleClick;
</script>

<button {disabled} on:click={handleClick} style="justify-content: {position}">
  {#if iconName && buttonLabel && position === "start"}
    <Icon name={iconName} />
  {/if}
  {#if buttonLabel}
    {buttonLabel}
  {/if}
  {#if iconName && buttonLabel && position === "end"}
    <Icon name={iconName} />
  {/if}
</button>

<style>
  button {
    /* width: 100%; */
    display: flex;
    align-items: center;

    background: transparent;
    border: none;

    text-decoration: underline;
    text-decoration-color: var(--color-highlight);
    font-size: 1rem;

    color: currentColor;

    margin: 0;
    padding: 0;
  }
  button:hover,
  button:focus {
    text-decoration-thickness: 2px;
    box-shadow: none;
  }
  button:disabled {
    cursor: unset;
    pointer-events: none;
    text-decoration-thickness: 1px;
    opacity: 0.2;
  }
</style>
