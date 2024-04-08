<script>
  import ScrollableImage from "$components/iconography/ScrollableImage.svelte";
  import { tezca2Positions } from "$components/iconography/setup/iconographySetup";
  import doc from "$data/doc.json";

  const imageRange = [0, 5320];
  const steps = doc["tezca2-steps"];
  
  let imgPath;
  let iconPath = "icon3";
  if (typeof window !== "undefined") {
    imgPath = window.matchMedia("(max-width: 600px)").matches ? "mobile_02.png" : "geral_03.png";
  }
</script>

<ScrollableImage
  title="brt"
  source={doc.source_tezca_label}
  sourceUrl={doc.source_tezca_url}
  name="tezca2"
  {imgPath}
  {iconPath}
  selected={0}
  {steps}
  positions={tezca2Positions}
  {imageRange}
/>