<template>
  <div class="main">
    <section class="intro">
      <div class="container"> 
        
        <div class="introduction">
          <div class="block">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
            <v-btn text to="/Contact">Contact</v-btn>
          </div>
          
          <div class="logo-big">
            <v-img lazy-src="../assets/logo-3-cropped-better.png" src="../assets/logo-3-cropped-better.png"> </v-img>
          </div>
        </div>
      </div>
    </section>
    <section class="featured-projects">
      <div class="container">
        <div class="title-block">
          <h1>Uitgelichte Projecten</h1>
        </div>
        <div class="row">
          <div class="col">
            <div class="logo">
              <v-img lazy-src="../assets/Sam-logo-wit.png" src="../assets/Sam-logo-wit.png" > </v-img>
            </div>
            <v-btn text to="/Projects">Bekijk Project</v-btn>
          </div>
          <div class="col">
            <div class="logo">
              <v-img lazy-src="../assets/moesapp.png" src="../assets/moesapp.png" > </v-img>
            </div>
            <v-btn text to="/Projects">Bekijk Project</v-btn>
          </div>
          <div class="col">
            <div class="logo">
              <v-img lazy-src="../assets/bella.png" src="../assets/bella.png" ></v-img>
            </div>
            <v-btn text to="/Projects">Bekijk Project</v-btn>
          </div>
        </div>
      </div>
    </section>
    <section class="featured-blog">
      <div class="container">
        <div class="title-block">
          <h1>Laatste Blogpost</h1>
        </div>
        <div class="featured-image">
          <!-- <v-img lazy-src="../assets/bella.png" src="../assets/bella.png"></v-img> -->
        </div>
      </div>
    </section>
    <section class="call-to-action">
      
    </section>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
  }
</script>

<style lang="scss">
@import "../assets/css/_variables.scss";

section.intro{
  background: $mainColor;
  padding: 80px 0 75px 0;

  .container{
    height: 100%;
  }

  .introduction{
    display: flex;
    height: 100%;
    flex-direction: row;
    width: 100%;

    .block{
      height: 200px;
      width: 400px;
      background: white;
      color: $thirdColorContrast;
      padding: 25px;
      //border-radius: 7px;

      .v-btn{
        margin-top: auto;
        margin-left: auto;
      }
    }

    .logo-big{
      margin-left: auto;
    }
  }
}

section.featured-projects{
  margin: 50px 0;

  .container{
    display: flex;
    flex-direction: column;
  }

  .title-block{
    margin-bottom: 25px;

    h1{
      background: $thirdColorContrast;
      color: $thirdColor;
      padding: 10px 15px;
      float: left;
      border-top-right-radius: 7px;
      border-bottom-right-radius: 7px;
    }
  }

  .row{
    margin: 0;

    .col{
      max-width: 33%;
      margin: 0 12.5px;
      background: $thirdColorContrast;
      color: $thirdColor;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      position: relative;

      &:first-of-type{
        margin: 0 12.5px 0 0;
      }

      &:last-of-type{
       margin: 0 0 0 12.5px;
      }

      .v-image{
        max-width: 180px;
      }

      .v-btn{
        position: absolute;
        padding: 15px;
        border-radius: 0;
        text-transform: capitalize;
        margin: 0;
        bottom: -12.5px;
        right: -12.5px;
        background: $mainColor;
        color: $mainColorContrast;
        z-index: 2;

        // Implement Later
        /*
        &::before{
          z-index: 1;
          content: '';
          background: $secondColor;
          width: 100%;
          height: 100%;
          position: absolute;
          bottom: 24px;
          transform: rotate(20deg);
          right: 2px;
          z-index: 1;
          opacity: 1;
        }
        */
      }
    }
  }
}
</style>
