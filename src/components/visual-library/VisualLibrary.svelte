<script>
  import Section from "$components/layout/Section.svelte";
  import doc from "$data/doc.json";
</script>

<Section fullBleed>
  <div class="two-gods">
    <div class="gods">
      <p class="intertitle">{@html doc.library_death_subtitle}</p>
      <img src={"./assets/illustrations/imaginary-god-death.png"} alt={"imaginary god of death."} />
      <img
        src={"./assets/illustrations/imaginary-paper-doll-death.png"}
        alt="imaginary god of death, decomposed."
      />
    </div>
    <div class="gods">
      <p class="intertitle">{@html doc.library_fertility_subtitle}</p>
      <img
        src={"./assets/illustrations/imaginary-god-fertility.png"}
        alt={"imaginary god of fertility."}
      />
      <img
        src={"./assets/illustrations/imaginary-paper-doll-fertility.png"}
        alt="imaginary god of death, decomposed."
      />
    </div>
  </div>
</Section>

<style>
  .two-gods {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 100em;
    margin: 0 auto;
  }
  .gods {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
  }
  .gods > img:first-of-type {
    width: clamp(150px, 50vw, 300px);
    border: 3px solid var(--color-highlight);
    margin: 1rem 0;
  }
  .gods > img:last-of-type {
    /* width: clamp(150px, 50%, 700px); */
    width: 100%;
    max-width: 700px;
    padding: 2rem 1rem;
  }
  .intertitle {
    /* text-transform: uppercase; */
    text-align: center;
    margin: 3rem 0 1rem 0;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 50em) {
    .two-gods {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .gods > img:last-of-type {
      padding: 2rem 3rem;
    }
    .intertitle {
      font-size: 2rem;
    }
  }
</style>
