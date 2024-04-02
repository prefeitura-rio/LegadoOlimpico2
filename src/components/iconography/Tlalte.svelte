<script>
  import ScrollableImage from "$components/iconography/ScrollableImage.svelte";
  import { tlaltePositions } from "$components/iconography/setup/iconographySetup";
  import doc from "$data/doc.json";

  const imageRange = [0, 5320];
  const steps = doc["tlalte-steps"];
</script>

<ScrollableImage
  title="reformasurbanas"
  source={doc.source_tlalte_label}
  sourceUrl={doc.source_tlalte_url}
  name="tlalte"
  imgPath={"geral_01.png"}
  selected={0}
  {steps}
  positions={tlaltePositions}
  {imageRange}
/>
