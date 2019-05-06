<template>
  <div class="documents-container">
    <div class="document"
    v-for="document in documents"
    v-bind:item="document"
    v-bind:key="document._id">
      <p><b>{{ document.name }}</b></p>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
