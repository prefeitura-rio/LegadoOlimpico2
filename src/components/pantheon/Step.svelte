<script>
  export let step = "";
  export let selected = false;
  export let activeStep = false;
</script>

<div class="step step-pantheon" class:selected>
  {#if step.title}
    <div class="step-title">
      {@html step.title}
    </div>
  {/if}
  <div class="step-text">{@html step.text}</div>
</div>

<style>
  .step {
    margin: 30rem 1rem 2rem 1rem;
    padding: 1.5rem;

    background-color: var(--color-background);

    border: 1px solid var(--color-highlight);
    opacity: 1;
    /* transition: opacity 400ms; */

    pointer-events: all;
    position: relative;
    z-index: 40;
  }
  .step:first-child {
    margin-top: -100%;
  }
  .step:last-child {
    margin-bottom: 1200px;
  }
  .selected {
    opacity: 1;
  }
  .step-title {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 1.5rem;
    border-bottom: 3px solid var(--color-highlight);
    padding: 1rem 0;
  }
  .step-text {
    font-size: 1.3rem;
  }

  :global(.major-god) {
    padding: 0 0.3rem;
    border-radius: 2px;
    color: var(--color-white);
    background-color: var(--category-secondary);
  }

  @media only screen and (min-width: 50em) {
    .step {
      margin: 50rem 1rem 2rem 1rem;
    }
  }
</style>
