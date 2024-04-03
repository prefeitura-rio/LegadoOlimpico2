<script>
  import ScrollableImage from "$components/iconography/ScrollableImage.svelte";
  import { tezcaPositions } from "$components/iconography/setup/iconographySetup";
  import doc from "$data/doc.json";

  const imageRange = [0, 5320];
  const steps = doc["tezca-steps"];
  
  let imgPath;
  if (typeof window !== "undefined") {
    imgPath = window.matchMedia("(max-width: 600px)").matches ? "mobile_02.png" : "geral_02.png";
  }
</script>

<ScrollableImage
  title=""
  source={doc.source_tezca_label}
  sourceUrl={doc.source_tezca_url}
  name="tezca"
  {imgPath}
  selected={0}
  {steps}
  positions={tezcaPositions}
  {imageRange}
/>