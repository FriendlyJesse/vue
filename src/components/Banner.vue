<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>banner</h2>
    <button @click="getParam">点击</button>
  </div>
</template>

<script>
  export default {
    name: 'banner',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App123'
      }
    },
    methods:
    {
      getParam()
      {
        console.log(this.$route.params);
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
