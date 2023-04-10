<template>
  <div class="block-wrapper">
    <div class="c-background-button">

      <div class="btn">
        <button        
          @click="onChangeColor('green')"
          class="button"
        >
          change color green
        </button>
      </div>

      <div class="btn">
        <button        
          @click="onChangeColor('black')"
          class="button"
        >
          change color black
        </button>
      </div>

      <div class="btn">
        <button 
          @click="onChangeColor('yellow')"

        
          class="button"
        >
          change color yellow
        </button>
      </div>

      <div class="btn">
        <button        
          @click="onChangeColor('red')"

          class="button"
        >
          change color red
        </button>
      </div>

      <div class="btn">
        <button        
          @click="onChangeColor('blue')"
          class="button"
        >
          change color blue
        </button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'CBackgroundButton',   

    methods: {
      onChangeColor(value) {
        this.$emit('changeColor', value)
        console.log('onChangeColor', value)
      }
    }    
  }
</script>

<style lang="scss" scoped>

.c-background-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn {
  margin-bottom: 40px;
}
.btn:last-child {
    margin-bottom: 0;
  }

</style>