<script>
  import { getContext } from "svelte";
  import God from "./God.svelte";

  const { nodes } = getContext("chart-state");

  // Order of images in the sprite
  const godIndices = [
    "aterro_gramacho",
    "bacia_jacarepagua",
      "boulevard_olímpico",
      "campo_de_golfe",
      "combate_enchentes",
      "ctr_seropedica",
      "derrubada_da_perimetral",
      "duplicação_do_joá",
      "edifício_a_noite",
      "entorno_do_engenhão",
      "marina_da_glória",
      "novos_túneis",
      "parque_madureira",
      "pequena_áfrica",
      "piscinões",
      "rede_hoteleira",
      "sambódromo",
      "saneamento_zona_oeste"
  ];
</script>

<div data-name="gods">
  {#each $nodes as god, i}
    <God {god} godIndex={godIndices.findIndex((d) => d === god.id)} />
  {/each}
</div>
