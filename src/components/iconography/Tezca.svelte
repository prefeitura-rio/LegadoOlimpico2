<script>
  import ScrollableImage from "$components/iconography/ScrollableImage.svelte";
  import { tezcaPositions } from "$components/iconography/setup/iconographySetup";
  import doc from "$data/doc.json";

  const imageRange = [0, 5320];
  const steps = doc["tezca-steps"];
  
  let imgPath;
  let iconPath = "icon2";
  
</script>

<ScrollableImage
  title="tezca"
  source={doc.source_tezca_label}
  sourceUrl={doc.source_tezca_url}
  name="tezca"
  imgPath="geral_02.png"
  {iconPath}
  selected={0}
  {steps}
  positions={tezcaPositions}
  {imageRange}
/>