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
          <v-icon color="accent" small class="mr-2" @click="console.log('ff')">
            mdi-pencil
          </v-icon>
          <v-icon color="error" small @click="console.log('ff')"> mdi-delete </v-icon>
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
            url: "/Project"
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