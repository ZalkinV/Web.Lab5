<template>

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
