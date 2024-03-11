<script>
  export let title = "";
  export let author = "";
  export let url = "";
</script>

<li>
  {#if url || url !== ""}
    <span class="title"><a href={url}>{title}</a>, </span>
  {:else}
    <span class="title">{title}, </span>
  {/if}
  <span class="author">{author}</span>
</li>

<style>
  .title {
  }
  li {
    list-style: none;
    margin-bottom: 0.5rem;
  }
  /* li::before {
    content: "";
    background: var(--color-highlight);
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    margin: 0 0.5rem 0.125rem -1rem;
  } */

  a {
    text-decoration: none;
    border-bottom: 1px solid var(--color-highlight);
    transition: border-width 100ms;
  }
  a:hover {
    border-bottom: 3px solid var(--color-highlight);
  }
  a:visited {
    color: var(--color-fg);
  }
</style>
