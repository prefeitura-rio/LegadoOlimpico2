<script>
  import { getContext } from "svelte";
  import God from "./God.svelte";

  const { nodes } = getContext("chart-state");

  // Order of images in the sprite
  const godIndices = [
    "avenida_rio_branco",
      "boulevard_olímpico",
      "campo_de_golfe",
      "derrubada_da_perimetral",
      "duplicação_do_joá",
      "edifício_a_noite",
      "entorno_do_engenhão",
      "marina_da_glória",
      "novos_túneis",
      "pequena_áfrica",
      "piscinões",
      "rede_hoteleira",
      "sambódromo",
      "teleférico_providência",
      "parque_madureira"
  ];
</script>

<div data-name="gods">
  {#each $nodes as god, i}
    <God {god} godIndex={godIndices.findIndex((d) => d === god.id)} />
  {/each}
</div>
