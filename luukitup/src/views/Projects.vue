<template>
  <v-container>
    
    <section class="projectsgrid">
      <template v-for="item in projects">
        
        <!-- <router-link :to="'/Projecten/Project?id='+item.id" class="item" :key="item.id"> -->
        <router-link :to="{ name: 'Project', params: { projectId: item.id } }" class="item" :key="item.id">
          <div class="featured-image" :key="item.id">
            <v-img lazy-src="../assets/logo-3-cropped-better-white.png" :src="item.featuredImageUrl"></v-img>
          </div>
        </router-link>
      </template>
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
    
    created(){
        const config = {
            method: 'get',
            url: "/Project/All"
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
    },

    methods: {
      AddProject()
      {

      }
    }
}
</script>

<style lang="scss">
@import "../assets/css/_variables.scss";

.projectsgrid{
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 300px auto 300px; 
  column-gap: 10px;
  row-gap: 15px;
  margin-top: 100px;
  
  .item{
    display: flex;
    background: $thirdColorContrast;
    padding: 50px;
    
    .featured-image{
      max-width: 100%;
      max-height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .v-image{
        display: flex;
        max-height: 100%;
      }
    }
  }
}

</style>