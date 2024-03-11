<script context="module">
  export const prerender = true;
  import Sources from "$components/colophon/Sources.svelte";
  import ScrollyTezca from "$components/iconography/ScrollyTezca.svelte";
  import ScrollyTlalte from "$components/iconography/ScrollyTlalte.svelte";
  import Hero from "$components/introduction/Hero.svelte";
  import Heading from "$components/layout/Heading.svelte";
  import Paragraph from "$components/layout/Paragraph.svelte";
  import IntroParagraph from "$components/layout/IntroParagraph.svelte";
  import Section from "$components/layout/Section.svelte";
  import Pantheon from "$components/pantheon/Pantheon.svelte";
  import VisualLibrary from "$components/visual-library/VisualLibrary.svelte";
  import doc from "$data/doc.json";
</script>

<Hero />

<Section id="intro">
  <div class="intro">
    {#each doc.introduction as p, i}
      <IntroParagraph hasCap={i === 0}>{@html p}</IntroParagraph>
    {/each}
  </div>
</Section>

<Section id="iconography">
  <Heading>{@html doc.iconography_title}</Heading>

  <Paragraph hasCap={true}>{@html doc.iconography_intro}</Paragraph>
  <Paragraph>{@html doc.iconography_imaginarygods}</Paragraph>
</Section>

<VisualLibrary />

<!-- PANTHEON -->
<Section id="pantheon">
  <Heading>{@html doc.pantheon_title}</Heading>
  <Paragraph hasCap={true}>{@html doc.pantheon_intro}</Paragraph>

  <Paragraph>{@html doc.pantheon_duality}</Paragraph>
</Section>

<ScrollyTlalte />

<ScrollyTezca />

<Pantheon />

<Sources />

<style>
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
