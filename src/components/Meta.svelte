<script>
  export let title = "Legado Olímpico";
  export let description = "O que seria do Rio sem as Olimpíadas?";
  export let url = "https://prefeitura-rio.github.io/LegadoOlimpico2/";
</script>

<svelte:head>
  <title>{title}</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="description" content={description} />
  <meta name="author" content="Legado Olímpico" />
  <meta name="news_keywords" content="" />

  <meta property="og:image" content="{url}/assets/images/capa.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="600" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://pudding.cool" />
	<meta name="twitter:creator" content="@escritoriodedadosviz" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{url}/assets/images/capa.jpg" />


  <meta name="robots" content="max-image-preview:large" />

  <link rel="canonical" href="{url}/" />
    
</svelte:head>
