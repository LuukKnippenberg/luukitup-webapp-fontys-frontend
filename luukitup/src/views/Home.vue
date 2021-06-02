<template>
  <div class="main home">
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
          <h1>Laatste Blogposts</h1>
        </div>
        <div class="row">
          <div class="col">
            <div class="content">
              <div class="featured-image">
                <!-- <v-img lazy-src="../assets/bella.png" src="../assets/bella.png"></v-img> -->
              </div>
              <div class="data">
                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </h2>
                <p> 
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim...
                </p>
                <v-btn text to="/Blog">Lees Meer</v-btn>
              </div>
            </div>
          </div>
          <div class="col">
             <div class="content">
              <div class="featured-image">
                <!-- <v-img lazy-src="../assets/bella.png" src="../assets/bella.png"></v-img> -->
              </div>
              <div class="data">
                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </h2>
                <p> 
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim...
                </p>
                <v-btn text to="/Blog">Lees Meer</v-btn>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
    <section class="call-to-action">
      <div class="container">
        <div class="content">
          <div class="title-block">
            <h1>Interesse?</h1>
          </div>
          <p>Neem gerust contact met ons op!</p>
          <v-btn text to="/Contact">Contact</v-btn>
        </div>
      </div>
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
      width: 400px;
      background: white;
      color: $thirdColorContrast;
      padding: 25px;
      position: relative;
      margin-bottom: 25px;

      .v-btn{
        position: absolute;
        right: -15px;
        bottom: -15px;
        background: $thirdColorContrast;
        background: $fourthColor;
        color: $thirdColor;
        border-radius: 0;
      }

      p{
        margin-bottom: 0;
      }
    }

    .logo-big{
      margin-left: auto;
    }
  }
}

section.featured-projects{
  margin: 100px 0;

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
        background: $fourthColor;
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

section.featured-blog{
  margin-bottom: 100px;

  .title-block{
    margin-bottom: 25px;

    h1{
      border-bottom: 3px solid $fourthColor;
      color: $thirdColorContrast;
      float: left;
    }
  }

  .content{
    display: flex;
    flex-direction: row;

    .featured-image{
      background: $secondColor;
      height: 250px;
      width: 250px;
      min-width: 250px;
      min-height: 250px;
    }

    .data{
      padding: 0 25px 0 25px;
      max-width: 750px;
      display: flex;
      flex-direction: column;

      h2{
        margin-bottom: 12.5px;
      }

      .v-btn{
        margin-top: auto;
        margin-left: auto;
        background: $secondColor;
        background: $fourthColor;
        color: $secondColorContrast;
        border-radius: 0;
      }
    }
  }

  
}

section.call-to-action{
  margin-bottom: 100px;

  .container{
    background: $mainColor;
    display: flex;
    flex-direction: column;
    max-width: 350px;
  }

  .content{
    padding: 25px;
    position: relative;

    .title-block{
      h1{
        color: $mainColorContrast;
      }
    }

    p{
      color: $mainColorContrast;
      margin-bottom: 0;
    }

    .v-btn{
      background: $thirdColorContrast;
      background: $fourthColor;
      color: $thirdColor;
      border-radius: 0;
      position: absolute;
      right: -15px;
      bottom: -15px;
    }

    .featured-image{
      background: $mainColor;
      height: 250px;
      width: 250px;
    }
  }
}
</style>
