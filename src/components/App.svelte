<script context="module">
  export const prerender = true;
  import Sources from "$components/colophon/Sources.svelte";
  import ScrollyTezca from "$components/iconography/ScrollyTezca.svelte";
  import ScrollyTlalte from "$components/iconography/ScrollyTlalte.svelte";
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
</script>

<div class="center">
  <Intro/>
</div>


<!-- <Hero /> -->

<div class="container">

  <div class="introduction">
    <a href="https://prefeitura-rio.github.io/LegadoOlimpico2_3D/" target="_blank" class="button">Explore o mapa interativo</a>
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

<Section id="intro">
  <div class="intro">
    {#each doc.introduction as p, i}
      <IntroParagraph hasCap={i === 0}>{@html p}</IntroParagraph>
    {/each}
  </div>
</Section>

<!-- <Section id="iconography">
  <Heading>{@html doc.iconography_title}</Heading>

  <Paragraph hasCap={true}>{@html doc.iconography_intro}</Paragraph>
  <Paragraph>{@html doc.iconography_imaginarygods}</Paragraph>
</Section>

<VisualLibrary /> -->

<!-- PANTHEON -->
<Section id="pantheon">
  <Heading>{@html doc.pantheon_title}</Heading>
  <Paragraph hasCap={true}>{@html doc.pantheon_intro}</Paragraph>

  <Paragraph>{@html doc.pantheon_duality}</Paragraph>
</Section>

<ScrollyTlalte />

<br><br><br><br>

<Section id="intro">
  <div class="intro">
    {#each doc.introductionone as p, i}
      <IntroParagraph hasCap={i === 0}>{@html p}</IntroParagraph>
    {/each}
  </div>
</Section>

<br><br><br><br>
<ScrollyTezca />

<Section id="intro">
  <div class="intro">
    {#each doc.introductiontwo as p, i}
      <IntroParagraph hasCap={i === 0}>{@html p}</IntroParagraph>
    {/each}
  </div>
</Section>

<br><br><br><br>

<Pantheon />

<Footer/>
</div>
<!-- <Sources /> -->

<style>
  .introduction{
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button {
    display: inline-block;
    font-family: var(--serif);
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
    font-size: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
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

  .container{
    background-color: #f3f3f3;
  }
   .center {
    z-index: -2;
    position: sticky;
    top:0;
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
</style>
