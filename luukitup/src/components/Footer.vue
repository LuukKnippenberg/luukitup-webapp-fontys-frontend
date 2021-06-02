<template>
  <v-footer>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="logo">
              <router-link to="/">
                <v-img
                    lazy-src="../assets/logo-3-cropped-better-white.png"
                    src="../assets/logo-3-cropped-better-white.png"
                  >
                </v-img>
              </router-link>
            </div>
        </div>
        <div class="col">
          <h2>Informatie</h2>  
          <ul>
            <li>KvK 80889190</li>
            <li>BTW (NL) NL003501564B36</li>
          </ul>
        </div>
        <div class="col">
          <h2>Navigatie</h2>
          <nav>
            <ul>
              <li><v-btn text to="/">Home</v-btn></li>
              <li><v-btn text to="/Over-Ons">Over Ons</v-btn></li>
              <li><v-btn text to="/Projecten">Projecten</v-btn></li>
              <li><v-btn text to="/Blog">Blog</v-btn></li>
              <li><v-btn text to="/Contact">Contact</v-btn></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',

    data: () => ({
      
    }),
  }
</script>

<style lang="scss">
@import "../assets/css/_variables.scss";

.v-footer{
  width: 100%;
  background: $thirdColorContrast!important;
  color: $thirdColor;
  display: flex;
  position: relative;
  padding: 50px 0!important;

  .row{
    margin: 0;
  }

  h2{
    color: $thirdColor;
    text-transform: uppercase;
  }

  .logo{
    height: 100%;
    justify-content: center;
    align-content: center;
    display: flex;

    a{
      display: flex;
      max-height: 100%;

      &:hover{
        .v-image__image{
          background-size: 60%;
        }
      }
    }

    .v-image__image{
      background-size: 55%;
      transition: 0.3s;
    }
  }

  p{
    color: $thirdColor;
  }

  nav{
    display: flex;
    margin-left: auto;

    ul{
      display: flex;
      flex-direction: column;
      padding: 0!important;
      padding-left: 0!important;
      left: -10px;
      position: relative;

      li{
        display: flex;
        align-content: center;
        align-items: center;

        a{
          color: $mainColorContrast!important;
          padding: 10px!important;
          min-width: 0px!important;
          text-transform: capitalize !important;;
        }
      }
    }
  }

  ul{
      display: flex;
      flex-direction: column;
      padding: 0!important;
      padding-left: 0!important;

      li{
        display: flex;
        align-content: center;
        align-items: center;
        color: $mainColorContrast!important;
        padding: 0!important;
        min-width: 0px!important;
        text-transform: capitalize !important;
      }
    }
}
</style>