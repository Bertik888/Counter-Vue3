<template>
  <div class="block-wrapper block-height">
    <div class="c-registration-res">
      <pre>result: {{ result }}</pre>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'CRegistrationResult',
    
    props: {
      result: {
        type: Object,
        default: undefined
      }
    }
  }
</script>

<style lang="scss" scoped>
.block-height {
  // min-height: 100%; - не верно     
  //как сделать равную высоту блоков? - [x] - border-box в app для *, а тут height: 100%; 
  height: 100%; 
}

</style>