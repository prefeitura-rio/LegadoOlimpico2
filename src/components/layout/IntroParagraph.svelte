<script>
</script>

<p><slot /></p>

<style>
  p {
    max-width: 42em;
    margin-bottom: 1rem;
    font-family: var(--serif);
    text-align: left;
    font-size: 1rem;
    line-height: 1.65;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
  @media only screen and (min-width: 30em) {
    p {
      font-size: 1rem;
    }
  }
</style>
