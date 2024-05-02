<script context="module">
  export const prerender = true;
  import Sources from "$components/colophon/Sources.svelte";
  import ScrollyTezca from "$components/iconography/ScrollyTezca.svelte";
  import ScrollyTlalte from "$components/iconography/ScrollyTlalte.svelte";
  import ScrollyTezca2 from "$components/iconography/ScrollyTezca2.svelte";
  import Hero from "$components/introduction/Hero.svelte";
  import Intro from "$components/introduction/Intro.svelte";
  import Heading from "$components/layout/Heading.svelte";
  import Paragraph from "$components/layout/Paragraph.svelte";
  import IntroParagraph from "$components/layout/IntroParagraph.svelte";
  import Section from "$components/layout/Section.svelte";
  import Pantheon from "$components/pantheon/Pantheon.svelte";
  import VisualLibrary from "$components/visual-library/VisualLibrary.svelte";
  import doc from "$data/doc.json";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
</script>

<!-- <Hero /> -->

<div class="container">
  <div class="logo">
    <img class="photo_logo" src="assets/capa_imgs/logo_ed.png" alt="Foto" />
  </div>
  <div class="cover-container">
    <div class="cover-image cover-image-1">
      <img src="assets/capa_imgs/capa_1.png" alt="Image 1" />
      <div class="cover-text cover-text-1">O que seria</div>
    </div>
    <div class="cover-image cover-image-2">
      <img src="assets/capa_imgs/capa_2.png" alt="Image 2" />
      <div class="cover-text cover-text-2">do Rio sem</div>
      <div class="cover-text cover-text-2-mobile">O que seria do <br>Rio sem as<br> Olimpiadas?</div>
    </div>
    <div class="cover-image cover-image-3">
      <img src="assets/capa_imgs/capa_3.png" alt="Image 3" />
      <div class="cover-text cover-text-3">as Olimpíadas?</div>
    </div>
  </div>
  <div class="arrowDown">
    <img class="arrowDownIcon" src="assets/capa_imgs/scroll_ic.png" alt="Foto" />
  </div>

  <div class="credits">
    <div class="credits-line">
      <div>Produzido pelo</div>
      <div><a href="https://www.dados.rio/">Escritório de Dados</a></div>
    </div>
    <div class="credits-line">
      <div>da</div>
      <div><a href="https://prefeitura.rio/">Prefeitura da Cidade do Rio de Janeiro</a></div>
    </div>
  </div>
  <Section>
    <div class="intro">
      {#each doc.introduction as p, i}
        <IntroParagraph hasCap={i === 0}>{@html p}</IntroParagraph>
      {/each}
    </div>
  </Section>

  <!-- <div class="introduction">
    <a href="https://prefeitura-rio.github.io/LegadoOlimpico2_3D/" target="_blank" class="button"
      >Explore o mapa interativo</a
    >
  </div> -->
  <!-- PANTHEON -->

  <Section id="pantheon">
    <Paragraph hasCap={true}>{@html doc.pantheon_intro}</Paragraph>

    <Paragraph>{@html doc.pantheon_duality}</Paragraph>
  </Section>

  <ScrollyTlalte />

  <br /><br /><br /><br />

  <Heading>{@html doc.pantheon_title}</Heading>

  <Section>
    <div class="intro">
      {#each doc.introductionone as p, i}
        <IntroParagraph hasCap={i === 0}>{@html p}</IntroParagraph>
      {/each}
    </div>
  </Section>

  <Heading>{@html doc.pantheon_title}</Heading>

  <ScrollyTezca />
  <br /><br /><br /><br />

  <Heading>{@html doc.pantheon_title}</Heading>

  <Section>
    <div class="intro">
      {#each doc.introductiontwo as p, i}
        <IntroParagraph hasCap={i === 0}>{@html p}</IntroParagraph>
      {/each}
    </div>
  </Section>

  <Heading>{@html doc.pantheon_title}</Heading>

  <br /><br /><br /><br />

  <ScrollyTezca2 />
  <br /><br /><br /><br />

  <Heading>{@html doc.pantheon_title}</Heading>

  <Section>
    <div class="intro">
      {#each doc.introductionthree as p, i}
        <IntroParagraph hasCap={i === 0}>{@html p}</IntroParagraph>
      {/each}
    </div>
  </Section>

  <Heading>{@html doc.pantheon_title}</Heading>

  <Section>
    <div class="intro">
      {#each doc.introductionfour as p, i}
        <IntroParagraph hasCap={i === 0}>{@html p}</IntroParagraph>
      {/each}
    </div>
  </Section>

  <Pantheon />

  <Footer />
</div>

<!-- <Sources /> -->
<style>
  .background-image {
    background-image: url("capa_final_R04.png");
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .logo {
    position: absolute;
    display: flex;
    justify-content: center;
    max-width: 200px;
    left: 0;
  right: 0;
    margin: 0 auto;
    padding-top: 1.5rem;
  }
  .arrowDown {
    position: absolute;
    display: flex;
    justify-content: center;
    max-width: 50px;
    left: 0;
  right: 0;
    margin: 0 auto;
    bottom:3rem;
  animation: bounce 2s infinite;
  }
  @keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
    /* text-shadow: 2px 2px 4px white; */
  }

  .introduction {
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button {
    display: inline-block;
    font-family: "CeraProBlack";
    padding: 3px 10px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    border-bottom: 3px solid var(--color-highlight);
    transition: 0.3s;
    /* color: black; */
    text-decoration: none;
  }

  .button:hover {
    scale: 1.1;
  }

  .credits {
    font-family: "CeraProRegular";
    font-size: 1rem;
    padding: 1rem;
    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;

    /* padding-top: 4rem; */
    /* padding-bottom: 4rem; */
  }
  .credits-line {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 0.2rem;
  }
  .credits-line > div {
    width: 50%;
  }
  .credits-line > div:first-of-type {
    margin-right: 0.25rem;
    text-align: right;
  }
  .credits-line > div:last-of-type {
    margin-left: 0.25rem;
    text-align: left;
  }

  .container {
    background-color: white;
  }
  .center {
    /* z-index: -2; */
    /* position: sticky; */
    /* top:0; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 30rem;
  }

  .intro {
    background-color: var(--color-background-2);
    padding: 1rem;
    margin: 0;
    border-radius: 6px;
  }

  .title {
    font-family: "CeraProMedium" !important;
    text-align: center;
    font-size: 2.9rem !important;
    line-height: 1;
    color: black;
    padding-bottom: 5rem;
    /* Ajuste adicional para garantir que o título esteja centralizado corretamente */
  }
  .cover-container {
    background-image: url("background.png");
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .cover-image {
    position: relative;
    width: 25vw; 
    height: 25vw; 
    max-width: 600px;
    max-height: 600px;
  }

  .cover-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cover-text {
    font-family: "CeraProRegular";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white; 
    font-size: 2em; 
    text-align: center;
    white-space: nowrap;
  }
  @media only screen and (max-width: 1000px) and (min-width: 600px) {
    .cover-text {
      font-size: 1.5em; 
    white-space: normal 
  }
  }
  @media only screen and (min-width: 1920px) {
    .cover-text {
    font-size: 3em; 
  }
  }
  @media only screen and (max-width: 1920px) and (min-width: 1300px) {
    .cover-text {
    font-size: 2.5em; 
  }
  }
  @media only screen and (max-width: 650px) {
    .background-image {
      /* background-image: url("capa_final_MOBILE.png"); */
    }
    .credits {
      padding-bottom: 2.2rem;
    }
    .introduction {
      padding-top: 5rem;
    }
    .title {
      font-size: 2rem !important;
      margin-top: 0rem;
      line-height: 2.6rem;
      /* min-width: 25rem !important; */
    }
    .title-container {
    }
  }
  @media only screen and (min-width: 30em) {
    .intro {
      margin: 2rem;
      padding: 2rem;
    }
  }
  @media only screen and (min-width: 50em) {
    .intro {
      margin: 3rem;
    }
  }

  @media only screen and (min-width: 50em) {
    .title {
      font-size: 5rem;
      margin: 10rem auto;
    }
    .credits {
      white-space: nowrap;
    }
  }

  @media only screen and (min-width: 600px) {
    .cover-text-2-mobile{
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
  .cover-image-1, .cover-image-3 {
    display: none;
  }
  .cover-image-2{
    width: 80vw;
    height: auto;
  }
  .cover-text-2{
      display: none;
    }
}
</style>
