<template>
  <a :href="to" :target="target">
    <slot />
    <span>{{ title }}</span>
  </a>
</template>

<script lang="ts">
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: '_self'
    }
  },
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style lang="scss">
a {
  position: relative;
  display: inline-block;

  span {
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    color: #fff;
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    white-space: nowrap;
    display: none;
    z-index: 1;
  }

  &:hover {
    span {
      display: block;
    }
  }
}
</style>
