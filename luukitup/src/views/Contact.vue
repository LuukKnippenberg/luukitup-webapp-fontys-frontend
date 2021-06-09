<template>
   <div class="main contact">
    <section class="contactinfo">
      <div class="container"> 
        <div class="row">
          <div class="col">
            <div class="title-block">
              <h1>Adresgegevens</h1>
            </div>
            <ul>
              <li>Luuk IT up</li>
              <li>Caspar Boshartstraat 2</li>
              <li>5367 AD Macharen</li>
            </ul>
          </div>
          <div class="col">
            <div class="title-block">
              <h1>Contactgegevens</h1>
            </div>
            <ul>
              <li>info@luukitup.nl</li>
              <li>+31 6 3760 5746</li>
            </ul>
          </div>
          <div class="col">
            <div class="title-block">
              <h1>Bedrijfsgegevens</h1>
            </div>
            <ul>
              <li>KvK 80889190</li>
              <li>BTW (NL) NL003501564B36</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="contactform">
      <div class="container"> 
        <ContactForm/>
      </div>
    </section>
  </div>
</template>

<script>
  import ContactForm from '../components/ContactForm'

  export default {
    name: 'Contact',

    components: {
      ContactForm
    },
  }
</script>

<style lang="scss">
@import "src/assets/css/_variables.scss";

  .contactinfo{
    margin: 0 0 100px 0;
    padding: 100px 0;
    color: $thirdColor;
    background: $thirdColorContrast;

    .title-block{
      margin-bottom: 12.5px;
      h1{
        color: $thirdColor;
      }
    }

    ul{
      margin: 0;
      padding: 0;
       li{
         list-style: none;
       }
    }
  }

  .contactform{
    margin: 0 0 100px 0;
  }
</style>
