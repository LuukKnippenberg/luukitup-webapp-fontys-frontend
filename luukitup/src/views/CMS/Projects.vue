<template>
  <v-container>
      <v-data-table
        :headers="headers"
        :items="projects"
        :search="search"
        v-bind:loading="loading"
        loading-text="Projecten Laden... Even geduld"
        sort-by="name"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Projecten</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              tile
              color="success"
              outlined
              @click="console.log('ff')"
              >Add</v-btn
            >
          </v-toolbar>
        </template>
        
        <template v-slot:item.actions="{ item }">
          <v-icon color="accent" small class="mr-2" @click="LogTest('Edit')">
            mdi-pencil
          </v-icon>
          <v-icon color="error" small @click="DeleteProject(item.id)"> mdi-delete </v-icon>
        </template>

      </v-data-table>
      <v-alert v-if="error" outlined type="error" color="error">
        There was an error receiving the Projects
      </v-alert>
    </v-container>
</template>

<script>
export default {

    data: () => ({
        search: "",
        loading: true,
        error: false,
        projects: [],
        deletePopup: false,
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
      submit () {
        this.$v.$touch();
        this.AddProject();
      },
      clear () {
        this.$v.$reset();
        this.title = '';
        this.description = '';
        this.featured = false;
        this.linkToProject = '';
      },
      cancel () {
        this.clear();
        this.dialog = false;
      },

      submitEdit () {
        this.$v.$touch();
        this.EditProject();
      },
      clearEdit () {
        this.$v.$reset();
        this.editTitle = '';
        this.editDescription = '';
        this.editFeatured = false;
        this.editLinkToProject = '';
      },
      cancelEdit () {
        this.clear();
        this.editDialog = false;
      },
      OpenEdit(item)
      {
        this.editTitle = item.title;
        this.editDescription = item.description;
        this.editLinkToProject = item.linkToProject;
        this.editFeatured = item.featured;
        this.editFeaturedImageUrl = item.featuredImageUrl;
        this.editDialog = true;
        
        this.editId = item.id;
      },
      
      AddProject()
      {
        const config = {
          method: 'POST',
          url: "/Project/Add",
          headers: {
            "Content-Type": "application/json",
          },
          data: { description: this.description, 
          featured: this.featured, 
          featuredImageUrl: this.featuredImageUrl, 
          linkToProject: this.linkToProject, 
          title: this.title }
        }
        this.$axios(config)
          .then((result) => {
            this.success = result.data;
            this.loading = false;
            this.dialog = false;
            console.log(this.projects);
            this.GetList();
          })
          .catch((error) => {
            this.error = true;
            this.loading = false;
            console.log(error);
          })
      },

      EditProject()
      {
        const config = {
          method: 'PUT',
          url: "/Project/Edit",
          headers: {
            "Content-Type": "application/json",
          },
          data: { 
            description: this.editDescription, 
            featured: this.editFeatured, 
            featuredImageUrl: this.editFeaturedImageUrl, 
            id: this.editId, 
            linkToProject: this.editLinkToProject, 
            title: this.editTitle }
        }
        this.$axios(config)
          .then((result) => {
            this.success = result.data;
            this.loading = false;
            this.editDialog = false;
            console.log(this.success);
            this.GetList();
          })
          .catch((error) => {
            this.error = true;
            this.loading = false;
            console.log(error);
          })
      },

      DeleteProject(id)
      {
        console.log(id)

        },
        DeleteProject(id)
        {
          console.log(id)

          const config = {
            method: 'delete',
            url: "/Project/Delete",
            data: {
              id: id
            }
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
        
    },
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
    }
}
</script>

<style>

</style>