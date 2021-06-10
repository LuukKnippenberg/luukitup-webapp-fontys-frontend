<template>
  <section class="cms-block">
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
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
            <v-spacer></v-spacer>
            <div class="text-center">
              <v-dialog v-model="dialog" width="750" content-class="add-form">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="success" v-bind="attrs" v-on="on" outlined tile>Add</v-btn>
                </template>

                <v-card>
                  <v-card-title class="text-h5 grey lighten-2">
                    Privacy Policy
                  </v-card-title>

                  <template>
                    <form class="add-form">

                      <v-text-field
                        v-model="title"
                        :error-messages="titleErrors"
                        :counter="80"
                        label="Title"
                        required
                        @input="$v.title.$touch()"
                        @blur="$v.title.$touch()"
                      ></v-text-field>

                      <v-text-field
                        v-model="description"
                        :error-messages="descriptionErrors"
                        label="Description"
                        required
                        @input="$v.description.$touch()"
                        @blur="$v.description.$touch()"
                      ></v-text-field>

                      <v-text-field
                        v-model="linkToProject"
                        :error-messages="linkToProjectErrors"
                        label="Link to Project"
                        @input="$v.linkToProject.$touch()"
                        @blur="$v.linkToProject.$touch()"
                      ></v-text-field>

                      <!--  
                      <v-file-input
                        truncate-length="15"
                        label="Featured image"
                      ></v-file-input>
                      -->

                      <v-checkbox
                        v-model="featured"
                        :error-messages="featuredErrors"
                        label="Is it a featured project?"
                        @change="$v.featured.$touch()"
                        @blur="$v.featured.$touch()"
                      ></v-checkbox>

                      <v-btn
                        class="mr-4"
                        @click="submit"
                      >
                        Add
                      </v-btn>
                      <v-btn @click="clear">
                        clear
                      </v-btn>
                    </form>
                  </template>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="AddProject()">I accept</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>

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
  </section>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      title: { required, maxLength: maxLength(80) },
      description: { required },
      linkToProject: { },
      featured: {
        checked (val) {
          return val
        },
      },
    },

    computed: {
      titleErrors () {
        const errors = []
        if (!this.$v.title.$dirty) return errors
        !this.$v.title.maxLength && errors.push('Title must be at most 80 characters long')
        !this.$v.title.required && errors.push('Title is required.')
        return errors
      },
      descriptionErrors () {
        const errors = []
        if (!this.$v.description.$dirty) return errors
        !this.$v.description.required && errors.push('Description is required.')
        return errors
      }
    },

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
        dialog: false,
        title: '',
        description: '',
        featured: false,
        linkToProject: '',
        featuredErrors: '',
        linkToProjectErrors: ''

    }),
      
    methods: {
      submit () {
        this.$v.$touch();
        AddProject();
      },
      clear () {
        this.$v.$reset();
        this.title = '';
        this.description = '';
        this.featured = false;
        this.linkToProject = '';
      },

      LogTest(message)
      {
        console.log(message);
      },
      AddProject()
      {
        const config = {
          method: 'delete',
          url: "/Project/Add"
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

        this.dialog = false;
      },
      DeleteProject(id)
      {
        console.log(id)

        const config = {
          method: 'delete',
          url: "/Project/Delete/" + id
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

<style lang="scss">
@import "../../assets/css/_variables.scss";

.cms-block{
  margin: 100px 0;
}

.v-dialog.add-form{
  
  form.add-form{
    padding: 25px;
  }
}

</style>