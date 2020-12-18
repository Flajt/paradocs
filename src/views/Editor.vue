<template>
  <div class="General">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
    <basic-menu-bar :commands="commands" :isActive="isActive"/>
    </editor-menu-bar>
    <div class="Editor">
      <editor-content :editor="editor" @keydown="keydown"/>
    </div>
  </div>
</template>



<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from "tiptap-extensions"; // this value is for editor
import BasicMenuBar from '../components/BasicMenuBar.vue';

export default {
  name: "Editor",
  components: {
    EditorContent,
    EditorMenuBar,
    BasicMenuBar
  },
  data() {
    return {
      editor: new Editor({
        content: "<p>This is just a boring paragraph</p>",
        extensions: [
          new Blockquote(),
          new CodeBlock(),
          new HardBreak(),
          new Heading(),
          new HorizontalRule(),
          new OrderedList(),
          new BulletList(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
        ],
      }),
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  },

  methods: {
    keydown(e){
      console.log(e)
    }
  },
};
</script>

<style scoped>
.General {
  margin: 0 auto;
  width: 272mm;
  height: 10px;
}
.menubar__button{
  width: 1rem;
  height: 2rem;
  margin: 0 auto;
}

.Editor {
  margin: 0 auto;
  width: 192mm;
  height: 272mm;
  border: 2px solid black;
  border-radius: 1px 1px 1px 1px;
  box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.2);
}
#paper {
  text-align: left;
  padding: 2px;
}
</style>
