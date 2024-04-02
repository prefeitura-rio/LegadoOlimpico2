<script>
  import { onMount } from "svelte";
    import Header from "../Header.svelte";

  let photos = [
    { id: 1, src: "assets/img/avenida_rio_branco.png", visible: false },
    { id: 2, src: "assets/img/boulevard_olimpico.png", visible: false },
    { id: 3, src: "assets/img/terminal_intermodal_gentileza.png", visible: false },
    { id: 4, src: "assets/img/campo_de_golfe.png", visible: false },
    { id: 5, src: "assets/img/cor.png", visible: false },
    { id: 6, src: "assets/img/derrubada_da_perimetral.png", visible: false },
    { id: 7, src: "assets/img/boulevard_olimpico.png", visible: false }
  ];

  function flashPhotos() {
    photos.forEach((photo) => {
      photo.visible = Math.random() < 0.8; // 50% chance of being visible
    });
    // Trigger reactivity by creating a new array
    photos = [...photos];
  }

  onMount(() => {
    setInterval(flashPhotos, 500); // Flash photos every second
  });
</script>

<div class="background-gif" />


<div class="container">
  <Header/>
  <div class="content">
  <h1 class="title">O que seria do Rio sem as Olimpíadas?</h1>

  <div class="photo-container">
    {#each photos as photo (photo.id)}
      <div
        class="photo {photo.visible ? 'visible' : ''}"
        on:click={flashPhotos}
        style="transform: rotate({photo.id % 2 === 0 ? 10 : -10}deg) translateY({photo.id % 2 === 0
          ? 0
          : -28}px);"
      >
        {#if photo.visible}
          <img src={photo.src} alt="Photo" />
        {/if}
      </div>
    {/each}
    <!-- Added the flashing down arrow -->
  </div>
  <div class="arrow">
    <img src="assets/img/arrow.svg" alt="Down arrow" />
  </div>
</div>
</div>

<style>
 .container {
  background-image: url("noise.gif");
  background-size: 300px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
 position: fixed;
 top: 40%; /* Centraliza verticalmente */
 left: 50%; /* Centraliza horizontalmente */
 transform: translate(-50%, -50%); /* Ajusta a posição para o centro exato */
 font-family: var(--serif);
 text-align: center;
 font-size: 3rem;
 line-height: 1;
 color: white;
 /* Ajuste adicional para garantir que o título esteja centralizado corretamente */
 transform: translate(-50%, -50%) translateY(-50%);
}


.photo-container {
  position: fixed;
  display: flex;
  max-width: 80vw;
  top: 65%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  width: 100%;
  margin-top: 10rem;
  justify-content: center;
  transform: translate(-50%, -50%) translateY(-50%);
  
}

.photo {
  flex: 1;
  margin: 10px;
}

.visible {
  display: block !important;
}

.arrow {
  position: fixed;
  left: 50%;
  top: 98%; /* Centraliza verticalmente */
  transform: translate(-50%, -50%) translateY(-50%);
  animation: arrow-flash 1s infinite;
}

.arrow img {
  width: 50px; /* Adjust as needed */

}

@keyframes arrow-flash {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media only screen and (min-width: 30em) {
  .title {
    font-size: 4rem;
    margin: 4rem auto;
  }
  .title::after {
    width: 250px;
  }
}

@media only screen and (min-width: 50em) {
  .title {
    font-size: 5rem;
    margin: 5rem auto;
  }
}
</style>
