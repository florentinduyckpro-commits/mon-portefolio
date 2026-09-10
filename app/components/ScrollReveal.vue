<template>
  <div
    ref="target"
    :style="{ transitionDelay: `${delay}ms` }"
    :class="[
      'transition-all duration-1000 ease-out',
      isVisible ? 'opacity-100 translate-x-0 translate-y-0' : hiddenClass[direction]
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
    defineProps({
        delay: { type: Number, default: 0 },
        direction: { type: String, default: 'up' } // 'up' | 'left' | 'right' | 'none'
    })

    const { target, isVisible } = useScrollReveal()

    const hiddenClass = {
        up: 'opacity-0 translate-y-15',
        left: 'opacity-0 -translate-x-15',
        right: 'opacity-0 translate-x-15',
        none: 'opacity-0'
    }
</script>