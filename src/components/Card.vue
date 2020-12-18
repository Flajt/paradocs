<template>
  <div class="card">
    <h1 class="title" style="font-size: 40px">Paradocs</h1>
    <p class="title-paragraph">
      A simple, safe and secure online document editor.
    </p>
    <br />
    <main>
      <div class="main">
        <h2 style="font-family: Cinzel">Simple design</h2>
        <p>
          Keeping disractions to a minimum and allowing you to focus on work.
        </p>
        <br />
        <h2 style="font-family: Cinzel">Teamwork</h2>
        <p>
          You only need one account and can invite up to ten people to work on
          the same document, no additional accounts required.
        </p>
        <br />
        <h2 style="font-family: Cinzel">Privacy</h2>
        <p>
          Your data is stored on servers in germany so you don't need to worry
          about privacy concerns.
        </p>
      </div>
      <br />
      <h2 style="font-family: Cinzel">Opensource</h2>
      <p>
        If you want to check if we are honoring our promises, check it for
        yourself, no need to worry, it's all right there for you to see!
      </p>
    </main>
    <br />
    <basic-button message="Start" :onClick="onClick" ></basic-button>
    <br />
  </div>
</template>

<script>
export default {
  components: { },
  name: "Card",
  methods: {
    onClick(){
      this.$router.push("/edit")
    }
  }
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.2);
  border-radius: 8px 8px 8px 8px;
  width: 80%;
  margin: 0 auto;
  padding: 5px;
  border: 1px solid black;
}
.card .title {
  color: black;
  font-weight: bold;
  font-family: Cinzel;
  font-size: 25px;
  margin-bottom: 5px;
}
.card .title-paragraph {
  font-family: Montserrat;
  font-style: italic;
}
.card .main {
  font-family: Montserrat;
  padding-bottom: 2px;
  font-size: 18px;
}

p {
  width: 40%;
  margin: 0 auto;
  font-size: 120%;
}
</style>
