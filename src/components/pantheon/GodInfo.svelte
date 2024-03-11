<script>
  import TextButton from "$components/layout/TextButton.svelte";
  import Search from "$components/pantheon/Search.svelte";
  import { getGodImportanceLabel, getMainGodColor } from "$domain/getters";
  import loadImage from "$utils/loadImage";
  import { getContext } from "svelte";
  import doc from "$data/doc.json";
  import SourceItem from "$components/colophon/SourceItem.svelte";

  const dev = process.env.NODE_ENV === "development";

  export let preventInteraction = false;

  const { getName, getImportance, selection } = getContext("chart-state");

  let visible = "main-info";

  $: content =
    $selection && doc.main_gods.find((d) => d.id === $selection.name)
      ? doc.main_gods.find((d) => d.id === $selection.name).content
      : undefined;

  $: sources =
    $selection && doc.main_gods.find((d) => d.id === $selection.name)
      ? doc.main_gods.find((d) => d.id === $selection.name).sources_group
      : undefined;

  $: {
    // reset to main info when a new God is selecetd
    if ($selection) visible = "main-info";
  }
</script>

<div class="wrapper">
  <div class="search-close">
    {#if !preventInteraction}
      {#if !$selection}
        <Search />
      {:else}
        <button on:click={() => selection.highlight(undefined)} style="margin-left:auto;"
          >Hide</button
        >
      {/if}
    {/if}
  </div>

  {#if $selection}
    <div class="illu-info-wrapper">
      <div class="illustration">
        {#await loadImage(`${dev ? "/" : "/2022/06/aztec-gods/"}assets/gods/svg/${$selection.id}.svg`)}
          <span>Loading...</span>
        {:then img}
          <img src={img.src} alt="Image of {getName($selection)}." />
        {:catch}
          <span>Sorry no image for {getName($selection)}</span>
        {/await}
      </div>
      <div class="god-info-details">
        {#if visible === "main-info"}
          <div class="scrollable">
            <div class="type">
              {getGodImportanceLabel(getImportance($selection))}
            </div>
            <h3 class="name">{@html getName($selection)}</h3>
            <p class="minibio">{@html $selection.bio}</p>
            {#if content}
              {#each content as c}
                <h4>{@html c.subtitle}</h4>
                {#each c.subcontent as p}
                  <p>{@html p}</p>
                {/each}
              {/each}
            {/if}
          </div>
          <div class="scrollable-fade" />
          <TextButton
            iconName="chevron-right"
            position="end"
            buttonLabel="sources"
            handleClick={() => (visible = "details")}
          />
        {:else}
          <!-- SOURCES -->
          <div class="scrollable">
            <div class="type">
              {getGodImportanceLabel(getImportance($selection))}
            </div>
            <h3 class="name">{@html getName($selection)}</h3>
            <div>
              <h4>Source of illustration</h4>
              <p>{@html $selection.source}</p>
            </div>

            {#if sources}
              <h4>Sources</h4>
              {#each sources as s}
                <SourceItem author={s.author} title={s.title} url={s.url} />
              {/each}
            {/if}
            <div>
              {#if $selection.spellings}
                <h4>Other spellings</h4>
                <p>{@html $selection.spellings}</p>
              {/if}
            </div>
          </div>
          <div class="scrollable-fade" />

          <TextButton
            iconName="chevron-left"
            position="start"
            buttonLabel="bio"
            handleClick={() => (visible = "main-info")}
          />
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
  .wrapper {
    background-color: var(--color-background);

    padding: 1rem 1rem;

    position: absolute;
    left: 0;
    top: 0;
    z-index: 50;
    width: 100vw;
  }
  .search-close {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .illu-info-wrapper {
    height: 90vh;
  }
  .illustration {
    height: 45%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .illustration img {
    height: 100%;
  }
  .god-info-details {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1rem;
  }
  .scrollable {
    overflow-y: scroll;
    position: relative;
    height: 100%;
    padding-bottom: 40px;
  }

  .scrollable-fade {
    content: "";
    margin-top: -50px;
    height: 60px;
    background: linear-gradient(to top, var(--color-background) 0%, rgba(253, 237, 198, 0) 100%);
    position: relative;
  }
  .minibio {
    padding-top: 0.5rem;
  }
  .type {
    font-size: 0.825rem;
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
    color: var(--color-gray-dark);
  }
  .name {
    font-size: 2rem;
    line-height: 1.2;
    letter-spacing: 0.06em;
    text-align: center;
    text-transform: uppercase;
    word-break: break-all;
  }

  h4 {
    margin-top: 0.7rem;
    margin-bottom: 0.2rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-highlight);
  }
  @media only screen and (min-width: 50em) {
    .wrapper {
      display: block;
      margin-bottom: 1rem;
      width: 100%;
    }
    .search-close {
      height: 3.5rem;
    }
    .type {
      font-size: 1.2rem;
    }
    .name {
      font-size: 2.2rem;
    }
  }
</style>
