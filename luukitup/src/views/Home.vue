<template>
  <section class="intro">
    <div class="container"> 
      
      <div class="introduction">
        <div class="block">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
          <v-btn text to="/Contact">Contact</v-btn>
        </div>
        
        <div class="logo-big">
          <v-img
                lazy-src="../assets/logo-3-cropped-better.png"
                src="../assets/logo-3-cropped-better.png"
              >
          </v-img>
        </div>
      </div>
      
    </div>

  </section>
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
      border-radius: 7px;

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
</style>
