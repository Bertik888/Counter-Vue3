<template>
  <div class="block-wrapper">
    <div class="c-action-2">

      <div class="reset">
        reset_counter: {{ reset_counter }} 
      </div>

      <div class="btn">
        <button
          @click="$emit('increment')"

          class="button"
        >
          Click counter
        </button>
      </div>
    </div>

    
  </div>
</template>

<script>
  export default {
    name: 'CAction2',    

    props: {
      reset_counter: {
        type: Number,
        default: 0
      }
    },

    

  }

  // @click="$emit('update:modelValue', $target.value)"
  // this.$emit('increment', value)



</script>

<style lang="scss">
.c-action-2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center
}

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

  min-width: 170px;
  max-height: 35px;
}

</style>