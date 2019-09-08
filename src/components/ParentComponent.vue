<template>
 <div>
  <child-component @change="change" />
  <p v-if="isVisible">显示!</p>
 </div>
</template>
<script>
import childComponent from "./ChildComponent";
export default {
 components: {
  childComponent
 },
 data() {
  return { isVisible: false };
 },
 methods: {
  change() {
   this.isVisible = !this.isVisible;
  }
 }
};
</script>