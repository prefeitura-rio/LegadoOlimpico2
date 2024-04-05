<script>
  import { onMount } from "svelte";
    import Header from "../Header.svelte";

  // let firstPhoto = ["assets/img/terminal_intermodal_gentileza.png","assets/img/sistema_brt.png"];
  // let firstPhotoIndex = 0; 

  // let secondPhoto = ["assets/img/sistema_vlt.png","assets/img/transoeste.png"];
  // let secondPhotoIndex = 0; 

  // let thirdPhoto = ["assets/img/museu_do_amanhã.png","assets/img/transcarioca.png"];
  // let thirdPhotoIndex = 0; 
  
  // let fourthPhoto = ["assets/img/museu_de_arte_do_rio.png","assets/img/GEO_isabel_salgado.png"];
  // let fourthPhotoIndex = 0; 

  // let fifthPhoto = ["assets/img/cor.png","assets/img/GET_emiliano_galdino.png"];
  // let fifthPhotoIndex = 0; 

  // let sixthPhoto = ["assets/img/edifício_a_noite.png","assets/img/derrubada_da_perimetral.png"];
  // let sixthPhotoIndex = 0; 

  // let seventhPhoto = ["assets/img/parque_madureira.png","assets/img/parque_rita_lee.png"];
  // let seventhPhotoIndex = 0; 


  // let photos = [
  //   { id: 1, src: firstPhoto[firstPhotoIndex], visible: false },
  //   { id: 2, src: secondPhoto[secondPhotoIndex], visible: false },
  //   { id: 3, src: thirdPhoto[thirdPhotoIndex], visible: false },
  //   { id: 4, src: fourthPhoto[fourthPhotoIndex], visible: false },
  //   { id: 5, src: fifthPhoto[fifthPhotoIndex], visible: false },
  //   { id: 6, src: sixthPhoto[sixthPhotoIndex], visible: false },
  //   { id: 7, src: seventhPhoto[seventhPhotoIndex], visible: false }
  // ];
  //TERMINAL INTERMODAL GENTILEZA
  //SISTEMA VLT
  //MUSEU DO AMANHÃ
  //MUSEU DE ARTE DO RIO
  //CENTRO DE OPERAÇÕES RIO
  //EDIFÍCIO A NOITE
  //PARQUE MADUREIRA
  
  //SISTEMA BRT
  //TRANSOESTE
  //TRANSCARIOCA
  //GEO ISABEL SALGADO
  //GET EMILIANO GALDINO
  //DERRUBADA DA PERIMETRAL
  //PARQUE RITA LEE

  // function flashPhotos() {
  //   photos.forEach((photo) => {
  //     photo.visible = Math.random() < 0.8; // 50% chance of being visible
  //   });
  //   // Trigger reactivity by creating a new array
  //   photos = [...photos];
  // }

  // function alternateFirstPhoto() { // Add this function
  //   firstPhotoIndex = (firstPhotoIndex + 1) % firstPhoto.length;
  //   photos[0].src = firstPhoto[firstPhotoIndex];

  //   secondPhotoIndex = (secondPhotoIndex + 1) % secondPhoto.length;
  //   photos[1].src = secondPhoto[secondPhotoIndex];

  //   thirdPhotoIndex = (thirdPhotoIndex + 1) % thirdPhoto.length;
  //   photos[2].src = thirdPhoto[thirdPhotoIndex];

  //   fourthPhotoIndex = (fourthPhotoIndex + 1) % fourthPhoto.length;
  //   photos[3].src = fourthPhoto[fourthPhotoIndex];

  //   fifthPhotoIndex = (fifthPhotoIndex + 1) % fifthPhoto.length;
  //   photos[4].src = fifthPhoto[fifthPhotoIndex];

  //   sixthPhotoIndex = (sixthPhotoIndex + 1) % sixthPhoto.length;
  //   photos[5].src = sixthPhoto[sixthPhotoIndex];

  //   seventhPhotoIndex = (seventhPhotoIndex + 1) % seventhPhoto.length;
  //   photos[6].src = seventhPhoto[seventhPhotoIndex];


  //   photos = [...photos];
  // }

  // onMount(() => {
  //   setInterval(flashPhotos, 500); // Flash photos every second
  //   setInterval(alternateFirstPhoto, 500); // Flash photos every second
  // });
</script>

<div class="background-gif" />


<div class="container">
  <Header/>
  <div class="content">
  <h1 class="title">O que seria do Rio <br>sem as Olimpíadas?</h1>

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
 top: 30%; /* Centraliza verticalmente */
 left: 50%; /* Centraliza horizontalmente */
 transform: translate(-50%, -50%); /* Ajusta a posição para o centro exato */
 font-family: var(--serif);
 text-align: center;
 font-size: 2.9rem !important;
 line-height: 1;
 color: white;
 /* Ajuste adicional para garantir que o título esteja centralizado corretamente */
 transform: translate(-50%, -50%) translateY(-50%);
}

.photo-container {
  position: fixed;
  display: flex;
  max-width: 60vw;
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

@media only screen and (max-width: 650px) {
  .title {
    font-size: 2.5rem !important;
    margin-top: 10rem;
    min-width: 25rem !important;
  }

  .photo-container{
    top: 55%; /* Centraliza verticalmente */
    max-width: 80vw;
  }
  .photo{
    margin: -1px;
  }
}

@media only screen and (min-width: 50em) {
  .title {
    font-size: 5rem;
    margin: 5rem auto;
  }
}

</style>
