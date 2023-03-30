<template>
  <div class="block-c-action">
    <button
      @click="$emit('increment')"
      
      class="button"
    >
      Click counter
    </button>
  </div>
</template>

<script>
  export default {
    name: 'CAction2',    

    

  }

  // @click="$emit('update:modelValue', $target.value)"
  // this.$emit('increment', value)



</script>

<style lang="scss" scoped>
.button {
  border: none;
  outline: none;
  cursor: pointer;

  background: #000;
  font-weight: bold;
  text-align: center;
  color: #fff;
  text-transform: uppercase;

  // width: 220px;
  padding: 10px 30px;
  border-radius: 20px;  
}

</style>