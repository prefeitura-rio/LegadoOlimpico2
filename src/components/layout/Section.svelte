<script>
  import variables from "$data/variables.json";

  export let id = undefined;
  export let fullBleed = false;
  export let background = variables.color.background;
</script>

<section {id} class:centered={!fullBleed} style="background-color: {background};">
  <slot />
</section>

<style>
  section {
    margin: 0 auto;
    padding: 1rem 0;
  }

  .centered {
    padding: 1rem 1rem;
    max-width: 46rem;
  }
</style>
