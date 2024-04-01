<script>
  import { getContext } from "svelte";
  import God from "./God.svelte";

  const { nodes } = getContext("chart-state");

  // Order of images in the sprite
  const godIndices = [
      "avenida_rio_branco",
      "boulevard_olímpico",
      "campo_de_golfe",
      "centro_de_operações_rio",
      "derrubada_da_perimetral",
      "duplicação_do_joá",
      "edifício_a_noite",
      "entorno_do_engenhão",
      "GEO_isabel_salgado",
      "GET_emiliano_galdino",
      "GET_josé_mauro_de_vasconcellos",
      "largo_da_prainha",
      "marina_da_glória",
      "museu_de_arte_do_rio",
      "museu_do_amanhã",
      "novas_vias",
      "novos_túneis",
      "parque_deodoro",
      "parque_madureira",
      "parque_rita_lee",
      "pequena_áfrica",
      "piscinões",
      "praça_mauá",
      "rede_hoteleira",
      "rio_centro",
      "sambódromo",
      "sistema_brt",
      "sistema_vlt",
      "teleférico_providência",
      "terminal_deodoro",
      "terminal_intermodal_gentileza",
      "transcarioca",
      "transoeste",
      "transolímpica",
      "vila_dos_atletas"
  ];
</script>

<div data-name="gods">
  {#each $nodes as god, i}
    <God {god} godIndex={godIndices.findIndex((d) => d === god.id)} />
  {/each}
</div>
