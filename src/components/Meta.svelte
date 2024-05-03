<script>
	export let title = "Legado Olímpico";
	export let description = "O que seria do Rio sem as Olimpíadas?";
	export let url = "https://prefeitura-rio.github.io/LegadoOlimpico2/";
	export let keywords = "Legado olímpico";
	export let preloadFont = [];
</script>

<svelte:head>
	<title>{title}</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content={description} />
	<meta name="author" content="Escritorio de Dados" />
	<meta name="news_keywords" content={keywords} />

	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="Escritorio de Dados" />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="pt_BR" />

	<meta property="og:image" content="https://prefeitura-rio.github.io/LegadoOlimpico2/assets/images/capa.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="600" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://pudding.cool" />
	<meta name="twitter:creator" content="@puddingviz" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image:src" content="https://prefeitura-rio.github.io/LegadoOlimpico2/assets/images/capa.jpg" />

	<meta name="robots" content="max-image-preview:large" />

	<link rel="canonical" href="{url}/" />

	{#each preloadFont as href}
		<link rel="preload" {href} as="font" type="font/woff2" crossorigin />
	{/each}
</svelte:head>
