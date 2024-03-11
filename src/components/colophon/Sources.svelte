<script>
  import SourceItem from "$components/colophon/SourceItem.svelte";
  import Section from "$components/layout/Section.svelte";
  import doc from "$data/doc.json";
</script>

<Section id="article-sources">
  {#if doc.sources_title}
    <h2>{doc.sources_title}</h2>
  {/if}
  {#each doc.codices as p}
    <p>{@html p}</p>
  {/each}

  {#each doc.sources as group}
    <h3>
      {group.group_title}
    </h3>

    <ul>
      {#each group.sources_group as groupItem}
        {#if groupItem.sources_subgroup}
          <h4>{groupItem.subgroup_title}</h4>
          <ul>
            {#each groupItem.sources_subgroup as subgroupItem}
              <SourceItem
                author={subgroupItem.author}
                title={subgroupItem.title}
                url={subgroupItem.url}
              />
            {/each}
          </ul>
        {:else}
          <SourceItem author={groupItem.author} title={groupItem.title} url={groupItem.url} />
        {/if}
      {/each}
    </ul>
  {/each}

  <h3>
    {doc.cta_wip_title}
  </h3>
  {#each doc.cta_wip as p}
    <p>{@html p}</p>
  {/each}

  <h3>
    {doc.cta_mentions_title}
  </h3>
  {#each doc.cta_mentions as p}
    <p>{@html p}</p>
  {/each}

  <h3>
    {doc.cta_websites_title}
  </h3>
  {#each doc.cta_websites as p}
    <p>{@html p}</p>
  {/each}
</Section>

<style>
  h2 {
    margin: 8rem 0 1rem 0;
    font-size: 2rem;
    line-height: 1.2;
    text-transform: uppercase;
  }
  h3 {
    margin-top: 3rem;
    margin-bottom: 0.5rem;
    font-weight: 100;
    text-transform: uppercase;

    color: var(--color-fg);
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    font-weight: 100;

    color: var(--color-fg);
  }
  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
</style>
