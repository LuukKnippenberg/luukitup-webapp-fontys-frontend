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

            <!-- Add Project -->
            <div class="text-center">
              <v-dialog v-model="dialog" width="750" content-class="add-form" :retain-focus="false">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="success" v-bind="attrs" v-on="on" outlined tile id="add-form-open">Add</v-btn>
                </template>

                <v-card>
                  <v-card-title class="text-h5 grey lighten-2">
                    Add Project
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
                        id="add-form-title"
                      ></v-text-field>

                      <v-text-field
                        v-model="description"
                        :error-messages="descriptionErrors"
                        label="Description"
                        required
                        @input="$v.description.$touch()"
                        @blur="$v.description.$touch()"
                        id="add-form-description"
                      ></v-text-field>

                      <v-text-field
                        v-model="linkToProject"
                        :error-messages="linkToProjectErrors"
                        label="Link to Project"
                        @input="$v.linkToProject.$touch()"
                        @blur="$v.linkToProject.$touch()"
                        id="add-form-linkToProject"
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
                        label="Featured Project"
                        @change="$v.featured.$touch()"
                        @blur="$v.featured.$touch()"
                        id="add-form-featured"
                      ></v-checkbox>

                      <!-- <v-divider></v-divider> -->

                      <v-btn color="success" class="mr-4" @click="submit" id="add-form-submit">Add</v-btn>
                      <v-btn class="mr-4" @click="clear" id="add-form-clear">clear</v-btn>
                      <v-btn color="error" class="mr-4" @click="cancel" id="add-form-cancel">Cancel</v-btn>
                    </form>
                  </template>
                </v-card>
              </v-dialog>
            </div>
            <!-- /Add Project -->
          </v-toolbar>
        </template>
        
        <!-- Template Delete and Edit Buttons -->
        <template v-slot:item.actions="{ item }">
          
          <v-icon color="accent" small class="mr-2" @click="OpenEdit(item)" id="edit-form-open">mdi-pencil</v-icon>
          <v-icon color="error" small @click="OpenDelete(item.id, item.title)" id="delete-form-open"> mdi-delete </v-icon>
        </template>
        <!-- /Template Delete and Edit Buttons -->

      </v-data-table>
      <v-alert v-if="error" outlined type="error" color="error">
        There was an error receiving the Projects
      </v-alert>

      <!-- Template Edit Project Dialog -->
      <template>
        <div class="text-center">
          <v-dialog v-model="editDialog" width="750" content-class="edit-form" :retain-focus="false">
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Edit Project
              </v-card-title>

              <template>
                <form class="edit-form">

                  <v-text-field
                    v-model="editTitle"
                    :error-messages="editTitleErrors"
                    :counter="80"
                    label="Title"
                    required
                    @input="$v.editTitle.$touch()"
                    @blur="$v.editTitle.$touch()"
                  ></v-text-field>

                  <v-text-field
                    v-model="editDescription"
                    :error-messages="editDescriptionErrors"
                    label="Description"
                    required
                    @input="$v.editDescription.$touch()"
                    @blur="$v.editDescription.$touch()"
                  ></v-text-field>

                  <v-text-field
                    v-model="editLinkToProject"
                    :error-messages="editLinkToProjectErrors"
                    label="Link to Project"
                    @input="$v.editLinkToProject.$touch()"
                    @blur="$v.editLinkToProject.$touch()"
                  ></v-text-field>

                  <!--  
                  <v-file-input
                    truncate-length="15"
                    label="Featured image"
                  ></v-file-input>
                  -->

                  <v-checkbox
                    v-model="editFeatured"
                    :error-messages="editFeaturedErrors"
                    label="Featured Project"
                    @change="$v.editFeatured.$touch()"
                    @blur="$v.editFeatured.$touch()"
                  ></v-checkbox>

                  <!-- <v-divider></v-divider> -->

                  <v-btn color="success" class="mr-4" @click="submitEdit">Edit</v-btn>
                  <v-btn class="mr-4" @click="clearEdit">clear</v-btn>
                  <v-btn color="error" class="mr-4" @click="cancelEdit">Cancel</v-btn>
                </form>
              </template>
            </v-card>
          </v-dialog>
        </div>
      </template>
      <!-- /Template Edit Project Dialog -->

      <!-- Template Delete Project Dialog -->
      <template>
        <div class="text-center">
          <v-dialog v-model="deleteDialog" width="750" content-class="delete-form" :retain-focus="false">
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Delete Project {{this.deleteTitle}}
              </v-card-title>
              <form>
                <v-btn color="success" class="mr-4" @click="SubmitDelete">Delete</v-btn>
                <v-btn color="error" class="mr-4" @click="CancelDelete">Cancel</v-btn>
              </form>
              
            </v-card>
          </v-dialog>
        </div>
      </template>
      <!-- /Template Delete Project Dialog -->

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
      editTitle: { required, maxLength: maxLength(80) },
      editDescription: { required },
      editLinkToProject: { },
      editFeatured: {
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
      },
      editTitleErrors () {
        const errors = []
        if (!this.$v.editTitle.$dirty) return errors
        !this.$v.editTitle.maxLength && errors.push('Title must be at most 80 characters long')
        !this.$v.editTitle.required && errors.push('Title is required.')
        return errors
      },
      editDescriptionErrors () {
        const errors = []
        if (!this.$v.editDescription.$dirty) return errors
        !this.$v.editDescription.required && errors.push('Description is required.')
        return errors
      }
    },
    data: () => ({
        search: "",
        loading: true,
        error: false,
        projects: [],
        success: false,
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
        linkToProjectErrors: '',
        featuredImageUrl: 'https://luukitup.nl',
        editDialog: false,
        editTitle: '',
        editDescription: '',
        editFeatured: false,
        editLinkToProject: '',
        editFeaturedErrors: '',
        editLinkToProjectErrors: '',
        editFeaturedImageUrl: 'https://luukitup.nl',
        editId: '',
        deleteDialog: false,
        deleteId: '',
        deleteTitle: '',
    }),
      
    methods: {
      submit () {
        this.$v.$touch();
        this.AddProject();

        this.clear();
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

      OpenDelete(deleteId, deleteTitle){
        this.deleteId = deleteId;
        this.deleteTitle = deleteTitle;
        this.deleteDialog = true;
      },
      SubmitDelete(){
        this.DeleteProject(this.deleteId);
        this.CancelDelete();
      },
      CancelDelete(){
        this.deleteId = '';
        this.deleteTitle = '';
        this.deleteDialog = false;
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
            //console.log(this.projects);
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
            //console.log(this.success);
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
        //console.log(id)
        const config = {
          method: 'delete',
          url: "/Project/Delete/" + id
        }
        this.$axios(config)
          .then((result) => {
            this.success = result.data;
            this.loading = false;
            //console.log(this.projects);
            this.GetList();
          })
          .catch((error) => {
              this.error = true;
              this.loading = false;
              console.log(error);
          })
      },
      GetList(){
        const config = {
          method: 'get',
          url: "/Project/All"
        }
        this.$axios(config)
          .then((result) => {
            this.projects = result.data;
            this.loading = false;
            //console.log(this.projects);
          })
          .catch((error) => {
            this.error = true;
            this.loading = false;
            console.log(error);
          })
      }
        
    },
    created(){
      this.GetList();
    }
  }
</script>

<style lang="scss">
@import "../../assets/css/_variables.scss";
.cms-block{
  margin: 100px 0;
}
.v-dialog.add-form, .v-dialog.edit-form, .v-dialog.delete-form{
  
  form{
    padding: 25px;
  }
}
</style>