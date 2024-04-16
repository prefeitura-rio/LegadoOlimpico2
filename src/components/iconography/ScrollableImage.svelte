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
      <MaskedImage {name} selected={activeStep.id} {imgPath} {positions} {imageRange} />
    </figure>

    <div class="scroll-area">
      {#each steps as step, i}
        <div class="step step-{title}" id="id-{i}">
          {#if step.text == "avenida_rio_branco"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/avenida_rio_branco.png" alt="Foto" />
            </div>
          {:else if step.text == "boulevard_olimpico"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/boulevard_olimpico.png" alt="Foto" />
            </div>
          {:else if step.text == "terminal_intermodal_gentileza"}
            <div class="image-container" id="terminal_intermodal_gentileza">
              <img
                class="photo_logo"
                src="assets/img/terminal_intermodal_gentileza.png"
                alt="Foto"
              />
            </div>
          {:else if step.text == "campo_de_golfe"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/campo_de_golfe.png" alt="Foto" />
            </div>
          {:else if step.text == "cor"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/cor.png" alt="Foto" />
            </div>
          {:else if step.text == "derrubada_da_perimetral"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/derrubada_da_perimetral.png" alt="Foto" />
            </div>
          {:else if step.text == "duplicacao_do_joa"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/duplicacao_do_joa.png" alt="Foto" />
            </div>
          {:else if step.text == "edificio_a_noite"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/edificio_a_noite.png" alt="Foto" />
            </div>
          {:else if step.text == "entorno_do_engenhao"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/entorno_do_engenhao.png" alt="Foto" />
            </div>
          {:else if step.text == "GEO_isabel_salgado"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/GEO_isabel_salgado.png" alt="Foto" />
            </div>
          {:else if step.text == "GET_emiliano_galdino"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/GET_emiliano_galdino.png" alt="Foto" />
            </div>
          {:else if step.text == "parque"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/parque.png" alt="Foto" />
            </div>
          {:else if step.text == "GET_jose_mauro_de_vasconcellos"}
            <div class="image-container">
              <img
                class="photo_logo"
                src="assets/img/GET_jose_mauro_de_vasconcellos.png"
                alt="Foto"
              />
            </div>
          {:else if step.text == "largo_da_prainha"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/largo_da_prainha.png" alt="Foto" />
            </div>
          {:else if step.text == "marina_da_gloria"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/marina_da_gloria.png" alt="Foto" />
            </div>
          {:else if step.text == "museu_de_arte_do_rio"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/museu_de_arte_do_rio.png" alt="Foto" />
            </div>
          {:else if step.text == "museu_do_amanhã"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/museu_do_amanhã.png" alt="Foto" />
            </div>
          {:else if step.text == "novas_vias"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/novas_vias.png" alt="Foto" />
            </div>
          {:else if step.text == "parque_deodoro"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/parque_deodoro.png" alt="Foto" />
            </div>
          {:else if step.text == "parque_madureira"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/parque_madureira.png" alt="Foto" />
            </div>
          {:else if step.text == "parque_rita_lee"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/parque_rita_lee.png" alt="Foto" />
            </div>
          {:else if step.text == "pequena_africa"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/pequena_africa.png" alt="Foto" />
            </div>
          {:else if step.text == "piscinoes"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/piscinoes.png" alt="Foto" />
            </div>
          {:else if step.text == "praca_maua"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/praca_maua.png" alt="Foto" />
            </div>
          {:else if step.text == "rede_hoteleira"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/rede_hoteleira.png" alt="Foto" />
            </div>
          {:else if step.text == "riocentro"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/riocentro.png" alt="Foto" />
            </div>
          {:else if step.text == "sambodromo"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/sambodromo.png" alt="Foto" />
            </div>
          {:else if step.text == "sistema_brt"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/sistema_brt.png" alt="Foto" />
            </div>
          {:else if step.text == "sistema_vlt"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/sistema_vlt.png" alt="Foto" />
            </div>
          {:else if step.text == "teleferico_providencia"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/teleferico_providencia.png" alt="Foto" />
            </div>
          {:else if step.text == "terminal_deodoro"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/terminal_deodoro.png" alt="Foto" />
            </div>
          {:else if step.text == "transcarioca"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/transcarioca.png" alt="Foto" />
            </div>
          {:else if step.text == "transoeste"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/transoeste.png" alt="Foto" />
            </div>
          {:else if step.text == "transolimpica"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/transolimpica.png" alt="Foto" />
            </div>
          {:else if step.text == "vila_dos_atletas"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/vila_dos_atletas.png" alt="Foto" />
            </div>
          {:else if step.text == "foto14"}
            <div class="image-container">
              <img class="photo_logo" src="assets/img/tezca-explorable.png" alt="Foto" />
            </div>
          {:else}
            <div class="step-text">{@html step.text}</div>
          {/if}
          {#if step.title}
            <div class="step-title">
              {@html step.title}
            </div>
          {/if}
          <div class="step-wrapper">
            {#if step.background_text}
              {#if step.background_text === "transporte"}
                <div class="step-background transporte">
                  <span class="part1">TRANS</span>
                  <span class="part2">PORTE</span>
                </div>
              {:else if step.background_text === "educação"}
                <div class="step-background educacao">
                  <span class="part1">EDUCA</span>
                  <span class="part2">ÇÃO</span>
                </div>
              {:else}
                <div
                  class="step-background"
                  class:transporte={step.background_text === "transporte"}
                  class:reformasurbanas={step.background_text === "reformas urbanas"}
                >
                  {@html step.background_text}
                </div>
              {/if}
            {/if}
            {#if step.description}
              <div class="step-description">
                {@html step.description}
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</Section>

<style>
  .image-container {
    position: relative;
    display: inline-block; /* Adjust as needed */
  }

  .photo_logo {
    display: block; /* Ensures the image is block-level for proper positioning */
  }

  .image-container::before {
    content: "";
    position: absolute;
    left: -7px;
    top: 40%; /* Adjust this value to change the starting point of the border */
    height: 60%; /* Cover half the height of the image */
    width: 8px; /* Width of the border */
    background-color: #014a7f; /* Border color */
  }

  #scrolly {
    position: relative;
    margin: 0 auto;
    max-width: 110em;
    display: grid;
    grid-template-columns: 1fr;
  }

  figure {
    position: -webkit-sticky;
    position: sticky;
    width: 45vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    left: 0;
    top: 0;
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
    width: calc(100% - 40px); /* Subtraindo 100px da largura total */
    margin: 30rem auto 2rem auto;
    padding: 5rem;
    opacity: 1;
    transition: opacity 400ms;
    pointer-events: all;
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
    /* font-weight:500; */
    font-size: 1.8rem;
    padding-top: 0.4rem;
    line-height: 0.9;
    text-align: right;
    letter-spacing: -0.1em;
    font-family: "CeraProBold";
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
  .step-description {
    text-align: justify;
    padding: 1rem 0;
    font-family: "CeraProRegular";
    min-width: 17rem;
  }
  .step-text {
    font-size: 1.3rem;
    padding: 1rem 0;
  }
  .step-wrapper {
    position: relative;
  }

  .step-background {
    position: absolute;
    top: 0;
    left: 0;
  }

  .step-background {
    z-index: -1;
    font-size: 4.1em;
    color: lightgray;
    max-width: 85%;
    opacity: 0.35;
    line-height: 0.8em;
    margin-top: -0.5em !important;
    margin-left: -0.9em !important;
    font-family: "CeraProRegular";
    font-weight: bold;
    text-transform: uppercase;
  }

  .transporte .part1,
  .transporte .part2,
  .educacao .part1,
  .educacao .part2 {
    display: block;
    width: 100%;
    text-align: left;
  }

  @media only screen and (min-width: 50em) {
    #scrolly {
      grid-template-columns: 1.5fr 1fr;
    }
    h3 {
      font-size: 3rem;
    }
    .step {
      margin: 50rem auto 2rem auto;
    }
  }
  /* @media only screen and (max-width: 2050px) and (min-width: 1920px) {
    figure {
      position: -webkit-sticky;
      position: sticky;
      width: 45vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      left: -10rem;
      top: 0;
      z-index: 0;
    }
  }
  @media only screen and (max-width: 1920px) and (min-width: 1890px) {
    figure {
      position: -webkit-sticky;
      position: sticky;
      width: 45vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      left: 5rem;
      top: 0;
      z-index: 0;
    }
  } */
  /* @media only screen and (max-width: 1890px) and (min-width: 1800px) {
    figure {
      position: -webkit-sticky;
      position: sticky;
      width: 45vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      left: 7rem;
      top: 0;
      z-index: 0;
    }
  }
  @media only screen and (max-width: 1800px) and (min-width: 1550px) {
    figure {
      position: -webkit-sticky;
      position: sticky;
      width: 50vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      left: 8rem;
      top: 0;
      z-index: 0;
    }
    .step{
      margin-left: 3rem;
    }
  }
 
  @media only screen and (max-width: 1400px) and (min-width: 1200px) {
    figure {
      position: -webkit-sticky;
      position: sticky;
      width: 60vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      left: 10rem;
      top: 0;
      z-index: 0;
    }
  }
   */
  @media only screen and (width: 1024px) {
    figure {
      /* background-color: red; */
      position: -webkit-sticky;
      position: sticky;
      width: 10vw;
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      left: 30rem;
      top: 8rem;
      z-index: 0;
    }
  }


  @media only screen and (max-width: 650px) {
    .step {
      margin-bottom: 1200px;

      padding-top: 6.5rem;
      background-color: white;
      /* border-radius: 8px; */
      border: solid 3px black;
      padding-bottom: 2rem;
    }

    .step:first-child {
      padding-top: 0rem;
      padding-bottom: 2rem;
    }
    .step:first-child.step-tezca2 {
      background-color: red;
      visibility: hidden;
    }
    figure {
      position: -webkit-sticky;
      position: sticky;

      width: 100vw;
      height: 100vh;

      top: 0;
      background-color: rgb(187, 198, 193);
    }
    .image-container img {
      transform: scale(1.5);
      padding-bottom: 4rem;
    }
    #terminal_intermodal_gentileza {
      /* padding-top: 6.5rem; */
    }
    .image-container::before {
      display: none;
    }

    .step-description {
      margin-left: -10vw;
      text-align: justify;
      margin: -1rem -3rem !important;
      font-family: "CeraProRegular";
      overflow: hidden;
    }
    .scroll-area {
      max-width: 100vw;
    }
    .step-title {
      margin-top: -1rem;
      padding-bottom: 1.5rem;
      min-width: 10rem;
      margin-left: -5rem;
      margin-right: -2rem;
    }
    .step-background {
      min-width: 200px !important;
    }
    .reformasurbanas {
      font-size: 4rem;
    }
    .transporte {
      font-size: 3.5rem;
    }
    .educacao .part1,
    .educacao .part2 {
      font-size: 5rem;
    }
  }
</style>
