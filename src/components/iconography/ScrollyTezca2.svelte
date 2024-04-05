<script>
  import { onMount } from "svelte";

  let Scrolly;
  onMount(async () => {
    const module = await import(`./Tezca2.svelte`);
    Scrolly = module.default;
  });
</script>

<svelte:component this={Scrolly} />
