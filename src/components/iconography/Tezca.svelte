<script>
  import ScrollableImage from "$components/iconography/ScrollableImage.svelte";
  import { tezcaPositions } from "$components/iconography/setup/iconographySetup";
  import doc from "$data/doc.json";

  const imageRange = [0, 5320];
  const steps = doc["tezca-steps"];
</script>

<ScrollableImage
  title="Tezcatlipoca"
  source={doc.source_tezca_label}
  sourceUrl={doc.source_tezca_url}
  name="tezca"
  imgPath={"tezca-explorable.png"}
  selected={0}
  {steps}
  positions={tezcaPositions}
  {imageRange}
/>
