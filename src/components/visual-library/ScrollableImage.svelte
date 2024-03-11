<script>
  export let localUrl = "";
  export let alt = "";
  export let title = "";

  import loadImage from "$utils/loadImage";

  const dev = process.env.NODE_ENV === "development";
</script>

<div class="container">
  <div class="title">{title}</div>

  <div class="image">
    {#await loadImage(`${dev ? "/" : "/aztec-gods/"}assets/${localUrl}`)}
      <span>Loading {alt}</span>
    {:then img}
      <img src={img.src} {alt} />
    {:catch error}
      {console.warn(error)}
    {/await}
  </div>
</div>

<style>
  .container {
    margin: 0 auto;
    display: inline-block;
    width: 500px;
  }
  .container:last-child {
    padding-right: 3rem;
  }
  .title {
    text-align: center;
  }
</style>
