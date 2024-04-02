<script context="module">
  import Section from "$components/layout/Section.svelte";
  import loadImage from "$utils/loadImage";
    import Intro from "./Intro.svelte";

  const icons = [
    "f01d",
    "f02b",
    "f01d",
    "f02b",
    "f01d",
    "f02b",
    "f01d",
    "f02b",
    "f01d",
    "f02b"
  ];
  // const icons_simpler = ["ahuitzotl", "azcatl", "ce_ozomatli", "ahkinshok", "ometeotl"];
  const dev = process.env.NODE_ENV === "development";
</script>

<Section fullBleed>
  <!-- <div style="padding: 1rem;">
    <div class="grid">
      {#each icons as icon, i}
        <div style="grid-area: i{i}">
          {#await loadImage(`${dev ? "/" : "/LegadoOlimpico2/"}assets/gods/svg/${icon}.png`)}
            <span />
          {:then img}
            <img src={img.src} alt={"icon"} />
          {:catch}
            <span />
          {/await}
        </div>
      {/each}
    </div>
  </div> -->

  <h1 class="title">O que seria do Rio sem as Olimpíadas?</h1>
  <div class="center">
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
</Section>

<style>
  .center {
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
  .title {
    max-width: 10em;
    padding: 0 2rem;
    margin: 2rem auto;
    font-family: var(--serif);
    text-align: center;
    font-size: 3rem;
    line-height: 1;
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

  .hero-image {
    width: 100%;
    padding: 0 1rem;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-image > img {
    max-width: 170px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "i0 i1 i2 i3 i4";
    border-bottom: 3px solid var(--color-highlight);

    max-width: 85em;
    margin: auto;

    padding: 0.2rem;
  }

  @media only screen and (min-width: 30em) {
    .title {
      font-size: 4rem;
      margin: 4rem auto;
    }
    .title::after {
      width: 250px;
    }
  }

  @media only screen and (min-width: 50em) {
    .title {
      font-size: 5rem;
      margin: 7rem auto;
    }
    .grid {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-areas: "i0 i1 i2 i3 i4 i5 i6";
    }
    .hero-image {
      height: 220px;
    }
    .hero-image > img {
      max-width: 220px;
    }
  }
  @media only screen and (min-width: 70em) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-areas: "i0 i1 i2 i3 i4 i5 i6 i7 i8 i9";
    }
  }
</style>
