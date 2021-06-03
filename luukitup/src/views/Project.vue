<template>
  <v-container>
    
    <section class="project" :data-id="this.projects.id">
      <div class="wrapper">
        <div class="logo">
          <v-img :lazy-src="this.projects.featuredImageUrl" :src="this.projects.featuredImageUrl" > </v-img>
        </div>
        <div class="content">
          <div class="title-block">
            <h1>{{this.projects.title}}</h1>
          </div>
          <p>{{this.projects.description}}</p>
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
        id: "aa4a2d91-38f4-43f1-8fde-10122a3c2cf5",
        projects: [],
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
    
    methods: {
        AddProject()
        {

        }
    },
    created(){
        const config = {
            method: 'get',
            url: "/Project/"+this.id
        }
        this.$axios(config)
            .then((result) => {
                this.projects = result.data;
                this.loading = false;
                console.log(this.projects);
            })
            .catch((error) => {
                this.error = true;
                this.loading = false;
                console.log(error);
            })
    }
}
</script>

<style lang="scss">
@import "../assets/css/_variables.scss";

section.project{
  display: flex;
  margin-top: 100px;
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