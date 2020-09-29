<template>
  <div>
    <p>いいね({{ halfNumber / 2 }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  export default {
    // props: ['totalNumber'],
    //propsをオブジェクトで使用するときkey:typeのvalueには型をいれる(バリデーション)
    //また、propsのkeyのvalueをオブジェクトで書くこともできる。
    // props: {
    //   totalNumber: Number,
    // },
    props: {
      totalNumber: {
        type: Number,
        // required: true,
        // default: 10,
      },
    },
    computed: {
      halfNumber() {
        return this.totalNumber / 2;
      }
    },
    methods: {
      increment() {
        this.$emit('my-click', this.totalNumber + 1);
      }
    }
  }
</script>
