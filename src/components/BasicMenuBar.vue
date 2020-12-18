<template>
  <div class="menubar">
    <button
      class="menubar__button"
      :class="{ 'is-active': isActive.bold() }"
      @click="commands.bold"
    >
      <unicon name="bold"> </unicon>
    </button>

    <button
      class="menubar__button"
      :class="{ 'is-active': isActive.italic() }"
      @click="commands.italic"
    >
      <unicon name="italic"></unicon>
    </button>

    <button
      class="menubar__button"
      :class="{ 'is-active': isActive.strike() }"
      @click="commands.strike"
    >
      <unicon name="text-strike-through"></unicon>
    </button>

    <button
      class="menubar__button"
      :class="{ 'is-active': isActive.underline() }"
      @click="commands.underline"
    >
      <unicon name="underline"></unicon>
    </button>

    <button
      class="menubar__button"
      :class="{ 'is-active': isActive.code() }"
      @click="commands.code"
    >
      <unicon name="arrow"></unicon>
    </button>

    <button
      class="menubar__button"
      :class="{ 'is-active': isActive.paragraph() }"
      @click="commands.paragraph"
    >
      <unicon name="paragraph"></unicon>
    </button>

    <button
      class="menubar__button"
      :class="{ 'is-active': isActive.heading({ level: 1 }) }"
      @click="commands.heading({ level: 1 })"
    >
      <unicon name="header-one"></unicon>
    </button>

    <button
      class="menubar__button"
      :class="{ 'is-active': isActive.heading({ level: 2 }) }"
      @click="commands.heading({ level: 2 })"
    >
      <unicon name="header-two"></unicon>
    </button>

    <button
      class="menubar__button"
      :class="{ 'is-active': isActive.heading({ level: 3 }) }"
      @click="commands.heading({ level: 3 })"
    >
      <unicon name="header-three"></unicon>
    </button>

    <button
      class="menubar__button"
      :class="{ 'is-active': isActive.bullet_list() }"
      @click="commands.bullet_list"
    >
      <unicon name="list-ul"></unicon>
    </button>

    <button
      class="menubar__button"
      :class="{ 'is-active': isActive.ordered_list() }"
      @click="commands.ordered_list"
    >
      <unicon name="list-ui-alt"></unicon>
    </button>

    <button
      class="menubar__button"
      :class="{ 'is-active': isActive.blockquote() }"
      @click="commands.blockquote"
    >
      <unicon name="comment"></unicon>
    </button>

    <button
      class="menubar__button"
      :class="{ 'is-active': isActive.code_block() }"
      @click="commands.code_block"
    >
      <unicon name="brackets-curly"></unicon>
    </button>

    <button class="menubar__button" @click="commands.horizontal_rule">
      <unicon name="grip-horizontal-line"></unicon>
    </button>

    <button class="menubar__button" @click="commands.undo">
      <unicon name="previous"></unicon>
    </button>

    <button class="menubar__button" @click="commands.redo">
      <unicon name="step-forward"></unicon>
    </button>
  </div>
</template>

<script>
export default {
  name: "BasicMenuBar",
  components: {},
  props: {
    commands: {
      required: true,
    },
    isActive: {
      required: true,
    },
  },
};
</script>

<style scoped>
.menubar {
  width: 40%;
  margin: 0 auto;
}
.menubar__button {
  width: 3em;
  height: 2em;
  position: relative;
  display: inline-block;
  font-size: 25;
  margin: 0 auto;
  padding: 0;
  font-weight: bold;
  align-content: center;
  background-color: white;
  border: none;
}
.menubar__button:hover{
  box-shadow: 2px 2px 2px 2px rgb(220,220,220);
;
}
</style>