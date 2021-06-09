<template>
  <v-container>
    
    <section class="project" :data-id="this.project.id">
      <div class="wrapper">
        <div class="logo">
          <v-img :lazy-src="this.project.featuredImageUrl" :src="this.project.featuredImageUrl" > </v-img>
        </div>
        <div class="content">
          <div class="title-block">
            <h1>{{this.project.title}}</h1>
          </div>
          <p>{{this.project.description}}</p>
        </div>
        
      </div>
      

      <nav>
        <v-btn text to="/Projecten">Terug naar Projecten</v-btn>

        <!-- TODO: Add Project link to Class/Database -->
        <v-btn text href="https://www.samknippenberg.nl" target="_blank">Bekijk Project</v-btn>
      </nav>
    </section>
    
  </v-container>
</template>

<script>
export default {

  //Project Class
  //
  //description
  //featuredImageUrl
  //id
  //title
  
    data: () => ({
        search: "",
        loading: true,
        error: false,
        id: "9dc06c05-4fc4-41a3-868d-cf71658e6a5e",
        project: [],
        headers: [
        {
            text: "Title",
            align: "start",
            value: "title",
        },
        { text: "Description", value: "description" },
        { text: "Actions", value: "actions", sortable: false, align: "right" },
        ],
    }),
    
    created()
    {
      if(this.$route.params.projectId != null)
      {
        this.id = this.$route.params.projectId;
      }
      else
      {
        //TODO
        //Redirect to 404
      }

      const config = {
        method: 'get',
        url: "/Project/"+this.id
      }
      this.$axios(config)
        .then((result) => {
            this.project = result.data;
            this.loading = false;
            console.log(this.project);
        })
        .catch((error) => {
            this.error = true;
            this.loading = false;
            console.log(error);
        })
    },

    methods: {
      AddProject(){

      },
      
    }
}
</script>

<style lang="scss">
@import "../assets/css/_variables.scss";

section.project{
  display: flex;
  margin: 100px 0;
  flex-direction: column;

  .wrapper{
    display: flex;
    flex-direction: row;
  }

  .content{
    margin-left: 50px;
  }

  .logo{
    width: 150px;
    background: $thirdColorContrast;
  }

  nav{
    display: flex;
    margin-top: 50px;
    .v-btn{
      background: $fourthColor;
      color: $fourthColorContrast;
      border-radius: 0;

      &:last-of-type{
        margin-left: auto;
      }
    }
  }
}

</style>