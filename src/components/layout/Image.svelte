<script>
  export let localUrl = "";
  export let alt = "";

  import loadImage from "$utils/loadImage";

  const dev = process.env.NODE_ENV === "development";
</script>

{#await loadImage(`${dev ? "/" : "/aztec-gods/"}assets/${localUrl}`)}
  <div>Loading {alt}</div>
{:then img}
  <img src={img.src} {alt} />
{:catch error}
  {console.warn(error)}
{/await}

<style>
  div,
  img {
    margin: 0 auto;
  }
</style>
