<template>
  <div>
  <Page :total="60" :page-size="3" size="small" @on-change="change" :styles="page" simple></Page>
  </div>
</template>
<script>
  export default {
      data() {
      return {
          page:{
            position: 'absolute',
            bottom:0,
            left:'50%',
            marginLeft:'-79px'
          }
      }
      },
    methods:{
       change(thepage){
         this.$emit('accept',thepage)
       }
   }
  }
</script>
<style>
  *{

  }
</style>
