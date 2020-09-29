<template>
  <div>
    <label for="title">タイトル</label>
      <input id="title" type="text">
      <pre>{{ value }}</pre>
  </div>
</template>

<script>
export default {
  props: ["value"]
}
</script>
