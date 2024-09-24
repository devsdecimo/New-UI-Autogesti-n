<template>
  <div class="accordion">
    <div class="accordion-section mb-2 border border-gray-300 rounded-lg">
      <div
        @click="toggleSection"
        :class="['accordion-header cursor-pointer p-4 flex justify-between items-center', titleColorClass]"
      >
        <h3 class="text-lg font-semibold">
          <slot name="title">Default Title</slot>
        </h3>
        <span>{{ isOpen ? '-' : '+' }}</span>
      </div>

      <div v-if="isOpen" class="accordion-content p-4 bg-white">
        <slot name="content">Default Content</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'Accordion',
  props: {
    titleColor: {
      type: String,
      default: 'bg-gray-200', 
    },
  },
  setup(props) {
    const isOpen = ref(false);

    const toggleSection = () => {
      isOpen.value = !isOpen.value;
    };

    const titleColorClass = computed(() => {
      return props.titleColor;
    });

    return {
      isOpen,
      toggleSection,
      titleColorClass,
    };
  },
});
</script>

<style scoped>
.accordion-section {
  transition: all 0.3s ease-in-out;
}

.accordion-content {
  transition: max-height 0.3s ease-in-out;
}
</style>
