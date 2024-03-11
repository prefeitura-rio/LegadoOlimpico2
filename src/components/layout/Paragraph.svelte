<script>
  export let hasCap = false;
</script>

<p class:cap={hasCap}><slot /></p>

<style>
  p {
    max-width: 42em;
    margin: 1rem 0;
    font-family: var(--serif);
    text-align: left;
    font-size: 1rem;
    line-height: 1.65;
  }
  p.cap:first-letter {
    color: var(--color-highlight);
    font-family: "Aztec 2 Web", Georgia;
    font-size: 3rem;
    line-height: 1;

    padding-right: 0.2rem;
    padding-left: 0.1rem;
  }

  @media only screen and (min-width: 30em) {
    p {
      font-size: 1.125rem;
    }
  }
</style>
