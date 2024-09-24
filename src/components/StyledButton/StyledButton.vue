<template>
    <button
      :class="buttonClass"
      :disabled="disabled"
      @click="handleClick"
      class="px-6 py-3 rounded-full font-semibold focus:outline-none transition-colors duration-300"
    >
      <slot />
    </button>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  
  export default defineComponent({
    name: 'StyledButton',
    props: {
      skin: {
        type: String,
        default: 'primary',  
        validator: (value: string) => ['primary', 'secondary', 'inactive'].includes(value),
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['click'],
    setup(props, { emit }) {
      const buttonClass = computed(() => {
        switch (props.skin) {
          case 'primary':
            return 'bg-blue-500 text-white hover:bg-blue-500';
          case 'secondary':
            return 'bg-gray-300 text-gray-700 hover:bg-gray-400';
          case 'inactive':
            return 'bg-gray-400 text-gray-600 cursor-not-allowed';
          default:
            return 'bg-blue-500 text-white';
        }
      });
  
      const handleClick = (event: Event) => {
        if (!props.disabled) {
          emit('click', event);
        }
      };
  
      return {
        buttonClass,
        handleClick,
      };
    },
  });
  </script>
  
  <style scoped>
  </style>
  