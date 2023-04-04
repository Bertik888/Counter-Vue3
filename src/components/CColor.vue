<template>
  <div class="block-wrapper">
    <div class="c-color">

      <div v-if="show">if text</div>
      <div v-else>else text</div>


      <div
        class="c-color__squrt"
        :style="{ backgroundColor: backgroundColor }"

        :class="[ show ? 'show-true' : 'show-false', 'class-text', { 'test': show } ]"
      >
        <span class="c-color__squrt_title">
          Квадрат: {{ colorNumber }}
        </span>
      </div>      

      <div class="btn">
        <button
          @click="onChangeColor"          
          class="button"
        >
          change color
        </button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'CColor',

    data() {
      return {
        colorNumber: 0,
        show: false
      }
    },

    methods: { 
      onChangeColor() {
        this.colorNumber = (Math.floor(Math.random() * 200) + 1)
        this.show = !this.show

        // this.$emit('backgroundColor', this.colorNumber)
        console.log(this.colorNumber)        
        console.log('onChangeColor')        
      }
    },

    computed: {
      backgroundColor() {
        if (this.colorNumber >= 0 && this.colorNumber < 100 ) {
          return 'red'
        } else if (this.colorNumber > 150) { 
          return 'green'
        } else {
          return 'yellow'
        }
        // return (this.colorNumber >= 0 && this.colorNumber < 100 ) ? 'red' : 'green'
      }

    }
    
  }
</script>

<style lang="scss" scoped>

.c-color {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;

  &__squrt {
    width: 100px;
    height: 100px;
    background: burlywood;
    border: 1px solid saddlebrown;
    display: flex;
    justify-content: center;
    align-items: center;

    &_title {
      color: blue;
      // vertical-align: center;  // как выровнять текст по центру внутри квадрата? правильно ли обозначен класс? 
      // text-align: center;
      // align-items: center;
    }
  }

}

</style>