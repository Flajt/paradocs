<template>
  <div>
    <button @click="onClick">{{message}}</button>
  </div>
</template>

<script>
export default {
    name: "basicButton",
    props: {
        message:{
            type: String,
            required: true,
        },
        onClick:{
          type: Function,
          required: true
        }
    }, 
};
</script>

<style scoped>
button {
  text-align: center;
  text-anchor: middle;
  padding: 10px;
  margin-bottom: 10px;
  width: 10%;
  border: 3px solid black;
  border-radius: 10px 10px 10px 10px;
  color: black;
  background-color: white;
  transition-duration: 0.3s;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 5px;
  min-width: 4rem;
}
button:hover {
  background-color: rgb(245, 250, 250, 0.3);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  font-weight: bold;
}
</style>