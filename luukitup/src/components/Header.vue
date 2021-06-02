<template>
  <header>
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <v-img
              lazy-src="../assets/logo-3-cropped-better.png"
              src="../assets/logo-3-cropped-better.png"
            >
          </v-img>
        </router-link>
      </div>
      <nav>
        <ul>
          <li><v-btn text to="/Over-Ons">Over Ons</v-btn></li>
          <li><v-btn text to="/Projecten">Projecten</v-btn></li>
          <li><v-btn text to="/Blog">Blog</v-btn></li>
          <li><v-btn text to="/Contact">Contact</v-btn></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
      
    }),
  }
</script>

<style lang="scss">
@import "../assets/css/_variables.scss";

header{
  height: 75px;
  width: 100%;
  background: $mainColor;
  color: $mainColorContrast;
  display: flex;
  position: relative;

  .container{
    flex-direction: row;
  }

  .logo{
    height: 100%;

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

  nav{
    display: flex;
    margin-left: auto;

    ul{
      display: flex;
      flex-direction: row;
      li{
        
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;

        a{
          color: $mainColorContrast!important;
        }
      }
    }
  }
}
</style>