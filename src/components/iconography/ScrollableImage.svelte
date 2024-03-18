<script>
  export const ssr = false;
  import MaskedImage from "$components/iconography/MaskedImage.svelte";
  import Section from "$components/layout/Section.svelte";

  import scrollama from "scrollama";
  import { onMount } from "svelte";

  export let title = "Tezcatlipoca";
  export let name = "mask-name";
  export let source = "illustration source";
  export let sourceUrl = undefined;
  export let imgPath = "";
  export let selected = "";
  export let steps = [];
  export let positions = [];
  export let imageRange = [0, 1];

  // Default with first step
  let activeStep = steps[0];

  const handleStepEnter = (response) => {
    selected = response.index;
    activeStep = steps[response.index];
  };

  onMount(() => {
    const scroller = scrollama();
    scroller
      .setup({
        step: `div .step-${title}`,
        // debug: true,
        offset: 0.5
      })
      .onStepEnter(handleStepEnter);
  });
</script>

<svelte:window />

<Section id="gods-iconography-{title}" fullBleed>
  <div id="scrolly">
    <figure>
      <h3>{@html title == "reformasurbanas" ? "" : title}</h3>
      <!-- <div class="illustration-source">
        {#if sourceUrl}
          (<a href={sourceUrl}>{@html source}</a>)
        {:else}
          ({@html source})
        {/if}
      </div> -->

      <MaskedImage {name} selected={activeStep.id} {imgPath} {positions} {imageRange} />
    </figure>
    <div class="scroll-area">
      {#each steps as step, i}
        <div class="step step-{title}">
          {#if step.title}
            <div class="step-title">
              {@html step.title}
            </div>
          {/if}
          {#if step.text == "foto1" || step.text == "foto2" || step.text == "foto3" || step.text == "foto4" || step.text == "foto5" || step.text == "foto6" || step.text == "foto7"}
          <img class="photo_logo" src="assets/img/tuneis.png" alt="Foto" />
          {:else}
          <div class="step-text">{@html step.text}</div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</Section>

<style>
  #scrolly {
    position: relative;
    margin: 0 auto;
    max-width: 100em;

    display: grid;
    grid-template-columns: 1fr;
  }
  figure {
    position: -webkit-sticky;
    position: sticky;

    width: 100%;
    height: clamp(20em, 90vh, 80em);

    padding: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    left: 0;
    top: 0;

    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 0;
  }

  .scroll-area {
    position: relative;
    z-index: 10;
  }

  .illustration-source {
    width: 90%;
    text-align: center;
    font-size: 1rem;
    line-height: 1;
    font-style: italic;
  }
  h3 {
    font-size: 2rem;
    line-height: 1.4;
    /* text-transform: uppercase; */
    /* letter-spacing: 0.1em; */
    font-weight: 500;
    /* background-color: var(--color-background-transparent); */
    border-bottom: 3.5px solid var(--color-highlight);
    border-radius: 2px;
    /* padding: 1rem; */
    z-index: 2;
    text-align: center;
  }

  .step {
    width: calc(100% - 100px); /* Subtraindo 100px da largura total */
    margin: 30rem auto 2rem auto;
    padding: 1rem;

    opacity: 1;
    transition: opacity 400ms;

    pointer-events: all;

    background-color: #ffffff;
    border: 4px solid #014A7F; /* Adicionando um contorno preto */

    position: relative;
    z-index: 10;
  }
  .step:first-child {
    margin-top: 15rem;
  }
  .step:last-child {
    margin-bottom: 1000px;
  }

  .step-title {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 1.6rem;
    /* border-bottom: 3px solid var(--color-highlight); */
    padding-top: 0.4rem;
  }
  .step-title::after {
    display: block;
    content: "";
    background: var(--color-highlight);
    height: 3px;
    width: 100%;
    margin: 1rem 0 1rem 0;
    border-radius: 2px;
  }
  .step-text {
    font-size: 1.3rem;
    padding: 1rem 0;
  }

  @media only screen and (min-width: 50em) {
    #scrolly {
      grid-template-columns: 2fr 1fr;
    }
    h3 {
      font-size: 3rem;
    }
    .step {
      margin: 50rem auto 2rem auto;
    }
  }
</style>
