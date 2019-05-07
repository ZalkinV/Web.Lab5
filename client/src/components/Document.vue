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
            <a v-on:click="openDocument(document._id)">{{ document.name }} </a>
            <button class="btn btn-sm btn-danger" v-on:click="deleteDocument(document._id)">Delete</button>
          </p>
        </div>
      </div>
      <div class="col-md-5">
        <textarea class="w-100" rows="15" v-model="text"></textarea>
        <button class="btn btn-success w-100">Save</button>
      </div>
      <div class="col-md-5 border border-secondary">
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
      text: "",
      id: 0
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
    },
    async openDocument(id)
    {
      const document = await DocumentService.getDocument(id);
      this.text = document.text;
      this.id = document._id;
    },
    async saveDocument()
    {
      await DocumentService.saveDocument(this.id, this.text);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
