<script context="module">
  export const prerender = true;
 </script>
 
 <script>
  import { onMount } from 'svelte';
  import Meta from "$components/Meta.svelte";
  import App from "$components/App.svelte";
 
  onMount(() => {
     const script1 = document.createElement('script');
     script1.src = "src/imagesloaded.pkgd.min.js";
     document.body.appendChild(script1);
 
     const script2 = document.createElement('script');
     script2.src = "src/charming.min.js";
     document.body.appendChild(script2);
 
     const script3 = document.createElement('script');
     script3.src = "src/demo.js";
     document.body.appendChild(script3);
 
     const script4 = document.createElement('script');
     script4.src = "src/demo2.js";
     document.body.appendChild(script4);
  });
 </script>
 
 <Meta />
 <App />
 