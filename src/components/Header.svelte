<script>
  // import wordmark from "$svg/wordmark.svg";
</script>

<header>
  <div class="wordmark">
    <img class="photo_logo" src="assets/logo_preto_horizontal.png" alt="Foto" />
  </div>
</header>

<style>
  .wordmark {
    max-width: 15em;
    position: absolute;
    top:0rem;
    padding: 1em 0;
    transform: translateX(-50%);
  }
  .photo_logo{
		width: 200px;
    filter: brightness(0) invert(1);
	}
  .wordmark a {
    border: none;
    color: var(--color-fg);
  }

  .wordmark a:hover {
    background-color: transparent;
  }

  :global(.wordmark svg path) {
    fill: currentColor;
  }
</style>
