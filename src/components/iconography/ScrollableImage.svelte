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
          {#if step.text == "avenida_rio_branco" }
          <img class="photo_logo" src="assets/img/avenida_rio_branco.png" alt="Foto" />
          {:else if step.text == "boulevard_olimpico" }
          <img class="photo_logo" src="assets/img/boulevard_olimpico.png" alt="Foto" />
          {:else if step.text == "terminal_intermodal_gentileza" }
          <img class="photo_logo" src="assets/img/terminal_intermodal_gentileza.png" alt="Foto" />
          {:else if step.text == "campo_de_golfe" }
          <img class="photo_logo" src="assets/img/campo_de_golfe.png" alt="Foto" />
          {:else if step.text == "cor" }
          <img class="photo_logo" src="assets/img/cor.png" alt="Foto" />
          {:else if step.text == "derrubada_da_perimetral" }
          <img class="photo_logo" src="assets/img/derrubada_da_perimetral.png" alt="Foto" />
          {:else if step.text == "duplicacao_do_joa" }
          <img class="photo_logo" src="assets/img/duplicacao_do_joa.png" alt="Foto" />
          {:else if step.text == "edificio_a_noite" }
          <img class="photo_logo" src="assets/img/edificio_a_noite.png" alt="Foto" />
          {:else if step.text == "entorno_do_engenhao" }
          <img class="photo_logo" src="assets/img/entorno_do_engenhao.png" alt="Foto" />
          {:else if step.text == "GEO_isabel_salgado" }
          <img class="photo_logo" src="assets/img/GEO_isabel_salgado.png" alt="Foto" />
          {:else if step.text == "GET_emiliano_galdino" }
          <img class="photo_logo" src="assets/img/GET_emiliano_galdino.png" alt="Foto" />
          {:else if step.text == "GET_jose_mauro_de_vasconcellos" }
          <img class="photo_logo" src="assets/img/GET_jose_mauro_de_vasconcellos.png" alt="Foto" />
          {:else if step.text == "largo_da_prainha" }
          <img class="photo_logo" src="assets/img/largo_da_prainha.png" alt="Foto" />
          {:else if step.text == "marina_da_gloria" }
          <img class="photo_logo" src="assets/img/marina_da_gloria.png" alt="Foto" />
          {:else if step.text == "museu_de_arte_do_rio" }
          <img class="photo_logo" src="assets/img/museu_de_arte_do_rio.png" alt="Foto" />
          {:else if step.text == "museu_do_ amanha" }
          <img class="photo_logo" src="assets/img/museu_do_ amanha.png" alt="Foto" />
          {:else if step.text == "novas_vias" }
          <img class="photo_logo" src="assets/img/novas_vias.png" alt="Foto" />
          {:else if step.text == "novos_tuneis" }
          <img class="photo_logo" src="assets/img/novos_tuneis.png" alt="Foto" />
          {:else if step.text == "parque_deodoro" }
          <img class="photo_logo" src="assets/img/parque_deodoro.png" alt="Foto" />
          {:else if step.text == "parque_madureira" }
          <img class="photo_logo" src="assets/img/parque_madureira.png" alt="Foto" />
          {:else if step.text == "parque_rita_lee" }
          <img class="photo_logo" src="assets/img/parque_rita_lee.png" alt="Foto" />
          {:else if step.text == "pequena_africa" }
          <img class="photo_logo" src="assets/img/pequena_africa.png" alt="Foto" />
          {:else if step.text == "piscinoes" }
          <img class="photo_logo" src="assets/img/piscinoes.png" alt="Foto" />
          {:else if step.text == "praca_maua" }
          <img class="photo_logo" src="assets/img/praca_maua.png" alt="Foto" />
          {:else if step.text == "rede_hoteleira" }
          <img class="photo_logo" src="assets/img/rede_hoteleira.png" alt="Foto" />
          {:else if step.text == "riocentro" }
          <img class="photo_logo" src="assets/img/riocentro.png" alt="Foto" />
          {:else if step.text == "sambodromo" }
          <img class="photo_logo" src="assets/img/sambodromo.png" alt="Foto" />
          {:else if step.text == "sistema_brt" }
          <img class="photo_logo" src="assets/img/sistema_brt.png" alt="Foto" />
          {:else if step.text == "sistema_vlt" }
          <img class="photo_logo" src="assets/img/sistema_vlt.png" alt="Foto" />
          {:else if step.text == "teleferico_providencia" }
          <img class="photo_logo" src="assets/img/teleferico_providencia.png" alt="Foto" />
          {:else if step.text == "terminal_deodoro" }
          <img class="photo_logo" src="assets/img/terminal_deodoro.png" alt="Foto" />
          {:else if step.text == "transcarioca" }
          <img class="photo_logo" src="assets/img/transcarioca.png" alt="Foto" />
          {:else if step.text == "transoeste" }
          <img class="photo_logo" src="assets/img/transoeste.png" alt="Foto" />
          {:else if step.text == "transolimpica" }
          <img class="photo_logo" src="assets/img/transolimpica.png" alt="Foto" />
          {:else if step.text == "vila_dos_atletas" }
          <img class="photo_logo" src="assets/img/vila_dos_atletas.png" alt="Foto" />
          {:else if step.text == "foto14" }
          <img class="photo_logo" src="assets/img/tezca-explorable.png" alt="Foto" />
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
  /* font-weight: bold; */
  font-size: 2rem;
  padding-top: 0.4rem;
  line-height: 1.2;
}
  .step-title::after {
    display: block;
    content: "";
    /*background: var(--color-highlight);*/
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
