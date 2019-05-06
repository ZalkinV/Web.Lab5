<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <input type="text" v-model="name" placeholder="Document name">
        <button class="btn btn-success btn-sm" v-on:click="createDocument()">Create</button>
        <div class="document"
        v-for="document in documents"
        v-bind:item="document"
        v-bind:key="document._id">
          <p>
            <b>{{ document.name }} </b>
            <button class="btn btn-sm btn-danger" v-on:click="deleteDocument(document._id)">Delete</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DocumentService from "../DocumentService.js";

export default
{
  name: 'Document',
  data()
  {
    return {
      documents: [],
      error: "",
      name: "",
      text: ""
    };
  },
  async created()
  {
    try
    {
      this.documents = await DocumentService.getDocuments();
    }
    catch(e)
    {
      this.error = e.message;
    }
  },
  methods:
  {
    async createDocument()
    {
      await DocumentService.insertDocument(this.name);
      this.documents = await DocumentService.getDocuments();
    },
    async deleteDocument(id)
    {
      await DocumentService.deleteDocument(id);
      this.documents = await DocumentService.getDocuments();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
