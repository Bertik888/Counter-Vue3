<template>
  <div class="block-wrapper">
    <div class="v-model">
      <pre>
        input_1: {{input_1}}
        input_2: {{input_2}}
        checkboxSingle: {{checkboxSingle}}
        checkboxMultiple: {{checkboxMultiple}}
        radio: {{radio}}
      </pre>
  <!---->
      <input
        type="text"
        placeholder="input_1"
        v-model="input_1"
      >
  <!---->
      <input
        type="text"
        placeholder="input_2"
        :value="input_2"
        @input="changeInput2"
      >
  <!---->
      <label>
        <input
          type="checkbox"
          v-model="checkboxSingle"
        >
        checkbox single
      </label>
  <!---->
      <div style="margin-top: 24px">checkbox multiple</div>
      <label>
        <input
          type="checkbox"
          v-model="checkboxMultiple"
          value="red"
        >
        red
      </label>
      <label>
        <input
          type="checkbox"
          v-model="checkboxMultiple"
          value="green"
        >
        green
      </label>
      <label>
        <input
          type="checkbox"
          v-model="checkboxMultiple"
          value="black"
        >
        black
      </label>
  <!---->
      <div style="margin-top: 24px">radio</div>
      <label>
        <input
          type="radio"
          v-model="radio"
          value="red"
        >
        red
      </label>
      <label>
        <input
          type="radio"
          v-model="radio"
          value="green"
        >
        green
      </label>
      <label>
        <input
          type="radio"
          v-model="radio"
          value="black"
        >
        black
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VModel',
  data() {
    return {
      input_1: '',
      input_2: '',
      checkboxSingle: false,
      checkboxMultiple: [],
      radio: ''
    }
  },
  methods: {
    changeInput2(val) {
      console.log(val)
      this.input_2 = val.target.value
    }
  }
}
</script>

<style lang="scss" scoped>
.v-model {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  input {
    margin-bottom: 24px;
    width: 100%;
    max-width: 300px;
  }

  label {
    display: flex;
    align-items: center;
    white-space: nowrap;
    cursor: pointer;

    input {
      margin: 0 16px 0 0;
    }
  }
}
</style>
